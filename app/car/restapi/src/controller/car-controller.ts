import express, { Request, Response, NextFunction } from 'express';
import { Service } from '../service';
import { SqlParams, ControllerBase } from '../types'
import {logger} from '../config'
import assert from 'assert'

export default class CarController extends ControllerBase {
    private static _instance: CarController
    private constructor(){
        super()
        logger.debug('CarController intialize...')        
    }
    public static get instance():CarController {
        return this._instance || (this._instance = new this())
    }

    public list(req: Request, res: Response , next: NextFunction){
        logger.debug('/car/list... ')
        let sqlParams: SqlParams = {'fromYmd':'20220101'}
        Service.instance.list('car.list', sqlParams)
        .then((resultData)=>{
            logger.debug(resultData);
            // res.status(200).json({resultCode:'00', resultMessage: 'OK', data : resultData})
            res.status(200).json(super.success(resultData))
        })
        .catch((error)=>{
            let e = new String(error)
            logger.debug('[' + e + ']')
            // res.status(500).json({resultCode:'99', resultMessage: 'unknown error', timestamp: new Date().getTime() })
            res.status(500).json(super.fail())
        })
    }
    public get(req: Request, res: Response , next: NextFunction){
        logger.debug('id:' + req.params.id)
        let resultData = {'id': req.params.id}
        res.status(200).json(super.success(resultData))
        // throw new Error('new EEEEEEE')
    }
    public insert(req: Request, res: Response , next: NextFunction){
        assert(req.body, ' body is not exist')
        assert(req.body.ymd, 'ymd is null')
        logger.info('ymd:' + req.body.ymd)
        let resultData = {'ymd': '111'}
        res.status(200).json(super.success(resultData))
    }
    public update(req: Request, res: Response , next: NextFunction){
        console.log(req.body);
        logger.debug('/car/1 ... update')
        logger.debug('id:' + req.body.id)
        logger.debug('ymd:' + req.body.ymd)
        let resultData = {'ymd': '111'}
        res.status(200).json(super.success(resultData))
    }
    public delete(req: Request, res: Response , next: NextFunction){
        
    }
}