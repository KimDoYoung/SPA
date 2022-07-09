import express, { Request, Response, NextFunction } from 'express';
import { Service } from '../service';

export default class CarController{
    private static _instance: CarController
    private service: Service
    private constructor(){
        console.log('CarController intialize...')        
        this.service = new Service();
    }
    public static get instance():CarController {
        return this._instance || (this._instance = new this())
    }
    list(req: Request, res: Response , next: NextFunction){
        console.log('/car/list... ')
        this.service.listAll(res)
        .then((resultData)=>{
            console.log(resultData);
            res.status(200).json({resultCode:'00', resultMessage: 'OK', data : resultData})
        })
        .catch((error)=>{
            res.status(500).json({resultCode:'99', resultMessage: error.text })
        })

        // .then(resultData=>{})
        // this.service.listPage()
        // this.service.get()
        // this.service.update()
        // this.service.delete()


    }
    get(req: Request, res: Response , next: NextFunction){

    }
    insert(req: Request, res: Response , next: NextFunction){

    }
    update(req: Request, res: Response , next: NextFunction){

    }
    delete(req: Request, res: Response , next: NextFunction){
        
    }
}