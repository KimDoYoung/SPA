import express, { Request, Response, NextFunction } from 'express';
import { JwtService } from '../service';
import {logger} from '../config'
import assert from 'assert'
import { UserData, User} from '../data'

export default class AuthController{

    private static _instance: AuthController
    private constructor(){
        logger.debug('AuthController intialize...')        
    }
    public static get instance(): AuthController {
        return this._instance || (this._instance = new this())
    }
    public login(req: Request, res: Response , next: NextFunction){
    }
    public logout(req: Request, res: Response , next: NextFunction){
    }
}