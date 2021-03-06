import express, { Request, Response, NextFunction } from 'express';
import { Service } from '../service';
import { SqlParams, ResMessage } from '../types';
import { logger } from '../config';
import ControllerBase from './controllerbase';
import assert from 'assert';

export default class CarController extends ControllerBase {
    private static _instance: CarController;
    private constructor() {
        super();
        logger.debug('CarController intialize...');
    }
    public static get instance(): CarController {
        return this._instance || (this._instance = new this());
    }
    public async test(req: Request, res: Response, next: NextFunction) {
        let conn;
        try {
            conn = Service.instance.getConnection();
            let res1 = (await conn).query('select 1 ');
            let res2 = (await conn).query('select 2 ');
        } catch (error) {
            throw error;
        } finally {
            if (conn) (await conn).end();
        }
    }
    public async list(req: Request, res: Response, next: NextFunction) {
        let conn;
        try {
            let { searchKey, pageNo, pageSize } = req.body;
            let sqlParams: SqlParams = {};
            sqlParams.searchKey = searchKey;
            sqlParams.pageSize = pageSize || process.env.pageSize;
            sqlParams.startIndex = (pageNo - 1) * sqlParams.pageSize;

            conn = await Service.instance.getConnection();
            let sql1 = Service.instance.getSqlStatement('car.list-count', sqlParams);
            let sql2 = Service.instance.getSqlStatement('car.list', sqlParams);
            logger.debug('sql1:[' + sql1 + ']');
            logger.debug('sql2:[' + sql2 + ']');

            const res1 = await conn.query(sql1);
            let [rows, , fields] = await conn.query(sql2);

            let totalCount = res1[0].totalCount.toString();
            let result = {
                list: rows,
                totalCount: totalCount
            };
            res.status(200).json(ResMessage.success('OK', result));
        } catch (error) {
            throw error;
        } finally {
            if (conn) (await conn).end();
        }
    }
    public get(req: Request, res: Response, next: NextFunction) {
        logger.debug('get /car/id');
        let id = req.params.id;
        logger.debug('id:' + id);
        let sqlParams: SqlParams = { id: id };
        super.executeAndDone('car.get', sqlParams, res);
    }
    public insert(req: Request, res: Response, next: NextFunction) {
        let validCheck = super.validationCheck(req, 'car-insert');
        if (validCheck.pass == false) {
            res.status(400).json(ResMessage.fail(400, validCheck.message));
            return;
        }
        let ymd = req.body.ymd;
        let resultData = { ymd: ymd };
        res.status(200).json(ResMessage.success('OK', resultData));
    }
    public update(req: Request, res: Response, next: NextFunction) {
        super
            .execute('test.test', {})
            .then((data) => {
                console.log('1:' + data);
                super.execute('test.test', {}).then((data) => console.log(data));
            })
            .catch((error) => console.log(error));
    }
    public delete(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id;
        let sqlParams: SqlParams = { id: id };
        Service.instance
            .execute('car.delete', sqlParams)
            .then((resultData) => {
                console.log(resultData);
                let result = { affectedId: resultData.affectedRows };
                res.status(200).json(ResMessage.success('OK', result));
            })
            .catch((error) => {
                logger.debug('[' + error + ']');
                res.status(500).json(ResMessage.fail(500, error));
            });
    }
}
