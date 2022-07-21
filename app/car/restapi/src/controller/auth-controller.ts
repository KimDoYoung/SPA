import express, { Request, Response, NextFunction } from 'express';
import { logger } from '../config'
import { ResMessage, User } from '../types';
import { JwtService } from '../service';
import { UserType, UserData} from '../data'
import bcrypt from 'bcrypt'
import assert from 'assert'

export default class AuthController{

    private static _instance: AuthController
    private constructor(){
        logger.debug('AuthController intialize...')        
    }
    public static get instance(): AuthController {
        return this._instance || (this._instance = new this())
    }
    public async login(req: Request, res: Response , next: NextFunction){
        logger.debug('/user/login #################')
        let id = req.body.user_id
        let pw = req.body.user_pw

        let found = UserData.find(user =>{ return (user.user_id === id && bcrypt.compareSync(pw, user.user_pw))})

        if(found){
            let user: User = new User(id, found.nm)
            let token: string = ''
            token = await JwtService.createJWT(user)
            logger.info('token: ' + token)
            // let decodedToken = JwtService.decodeJWT(token)
            // console.log('decodedtoken: ' , decodedToken)
            res
            .cookie('auth_token', token, { httpOnly: true, secure: process.env.NODE_ENV === "production"})
            .status(200).json(ResMessage.success('OK',{token: token}))
        }else{
            logger.debug(id + ' not found')
            res.status(403).json(ResMessage.fail(403, 'user auth fail'))
        }
    }
    public logout(req: Request, res: Response , next: NextFunction){
        res
        .clearCookie('auth_token')
        .status(200)
        .json(ResMessage.success('OK',{message: 'Successfully logged out'}))
    }
}