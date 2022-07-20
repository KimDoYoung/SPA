import express, { Request, Response, NextFunction } from 'express';
import { logger } from '../config'
import { ResMessage } from '../types';
import { JwtService } from '../service';
import { UserData, User} from '../data'
import assert from 'assert'

export default class AuthController{

    private static _instance: AuthController
    private constructor(){
        logger.debug('AuthController intialize...')        
    }
    public static get instance(): AuthController {
        return this._instance || (this._instance = new this())
    }
    public login(req: Request, res: Response , next: NextFunction){
        res.status(200).json(ResMessage.success('OK',{message: 'single file upload OK'}))
    }
    public logout(req: Request, res: Response , next: NextFunction){
        res.status(200).json(ResMessage.success('OK',{message: 'single file upload OK'}))
    }
}