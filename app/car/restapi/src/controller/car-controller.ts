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
        super.execute('car.list', sqlParams, res)
        

        // Service.instance.execute('car.list', sqlParams)
        // .then((resultData)=>{
        //     logger.debug(resultData);
        //     // res.status(200).json({resultCode:'00', resultMessage: 'OK', data : resultData})
        //     res.status(200).json(super.success(resultData))
        // })
        // .catch((error)=>{
        //     let e = new String(error)
        //     logger.debug('[' + e + ']')
        //     // res.status(500).json({resultCode:'99', resultMessage: 'unknown error', timestamp: new Date().getTime() })
        //     res.status(500).json(super.fail())
        // })
    }
    public get(req: Request, res: Response , next: NextFunction){
        logger.debug('get /car/id')
        let id = req.params.id;
        logger.debug('id:' + id)
        let sqlParams: SqlParams = {'id': id}
        super.execute('car.get', sqlParams, res)
        
        // let resultData = {'id': req.params.id}
        // res.status(200).json(super.success(resultData))
        // throw new Error('new EEEEEEE')
    }
    public insert(req: Request, res: Response , next: NextFunction){
        let validCheck = super.validationCheck(req, 'car-insert');
        if(validCheck.pass == false){
            res.status(400).json(super.fail('01', validCheck.message))
            return
        }


        logger.info('ymd:' + req.body.ymd)
        let ymd = req.body.ymd
        let resultData = {'ymd': ymd}
        res.status(200).json(super.success(resultData))
    }
    public update(req: Request, res: Response , next: NextFunction){
        console.log(req.body);
        logger.debug('/car/1 ... update')
        logger.debug('id:' + req.params.id)
        logger.debug('ymd:' + req.body.ymd)
        let ymd = req.body.ymd
        let resultData = {'ymd': ymd}
        res.status(200).json(super.success(resultData))
    }
    public delete(req: Request, res: Response , next: NextFunction){
        let id = req.params.id;
        let sqlParams: SqlParams = {'id': id}
        Service.instance.execute('car.list', sqlParams)
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
}