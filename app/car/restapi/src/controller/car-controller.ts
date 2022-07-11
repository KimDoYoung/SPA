import express, { Request, Response, NextFunction } from 'express';
import { Service } from '../service';
import { SqlParams, ControllerBase } from '../types'

export default class CarController extends ControllerBase {
    private static _instance: CarController
    private constructor(){
        super()
        console.log('CarController intialize...')        
    }
    public static get instance():CarController {
        return this._instance || (this._instance = new this())
    }

    public list(req: Request, res: Response , next: NextFunction){
        console.log('/car/list... ')
        let sqlParams: SqlParams = {'fromYmd':'20220101'}
        Service.instance.list('car.list1', sqlParams)
        .then((resultData)=>{
            console.log(resultData);
            // res.status(200).json({resultCode:'00', resultMessage: 'OK', data : resultData})
            res.status(200).json(this.success(resultData))
        })
        .catch((error)=>{
            let e = new String(error)
            console.log('[' + e + ']')
            // res.status(500).json({resultCode:'99', resultMessage: 'unknown error', timestamp: new Date().getTime() })
            res.status(500).json(this.fail())
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