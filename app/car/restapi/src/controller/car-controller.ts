import express, { Request, Response, NextFunction } from 'express';
import { Service } from '../service';
import { SqlParams, ControllerBase } from '../types'
import {logger} from '../config'

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

    }
    public insert(req: Request, res: Response , next: NextFunction){

    }
    public update(req: Request, res: Response , next: NextFunction){

    }
    public delete(req: Request, res: Response , next: NextFunction){
        
    }
}