import express, { Request, Response, NextFunction } from 'express';
import { MariaDB } from '../database';

export default class CarController{
    private static _instance: CarController

    private constructor(){
        console.log('CarController intialize...')        
    }
    public static get instance():CarController {
        return this._instance || (this._instance = new this())
    }
    list(req: Request, res: Response , next: NextFunction){
        let rows= MariaDB.instance.executeQuery('select * from ap_user');
        res.status(200).json({message:'list OK', data : rows})
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