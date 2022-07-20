import express, { Request, Response, NextFunction } from 'express';
import { Service } from '../service';
import { SqlParams, ResMessage } from '../types'
import {logger} from '../config'
import ControllerBase  from './controllerbase'
import assert from 'assert'
import { UserData, User} from '../data'

export default class UserController extends ControllerBase {
    private static _instance: UserController
    private userList: Array<User>
    private constructor(){
        super()
        this.userList = UserData
        logger.debug('UserController intialize...')        
    }
    public static get instance(): UserController {
        return this._instance || (this._instance = new this())
    }
    public async list(req: Request, res: Response , next: NextFunction){
        logger.debug('get /user/list')
        console.log(UserData)
        let result = {
            list : UserData,
            totalCount : UserData.length
        }
        res.status(200).json( ResMessage.success('OK', result) );
    }
    public get(req: Request, res: Response , next: NextFunction){
        logger.debug('get /user/id')
        let id = req.params.id
        let found = UserData.find(user => user.user_id === id)
        logger.debug(`id:${id}, found: ${found}`)
        if(found){
             res.status(200).json(ResMessage.success('OK', found))
        }else{     
             res.status(500).json(ResMessage.fail(400, `${id} not found`))
        }     
    }
    public insert(req: Request, res: Response , next: NextFunction){
        let validCheck = super.validationCheck(req, 'user-insert');
        if(validCheck.pass == false){
            res.status(400).json( ResMessage.fail(400, validCheck.message) )
            return
        }
        let {user_id, user_pw, nm} = req.body
        let id = UserData.length
        UserData.push({user_id, user_pw, nm})
        res.status(200).json(ResMessage.success('OK', {effectedRecordCount:1} ))
    }

    public update(req: Request, res: Response , next: NextFunction){
        logger.debug('patch /user/:id')
        let id = req.params.id
        let validCheck = super.validationCheck(req, 'user-insert');
        if(validCheck.pass == false){
            res.status(400).json( ResMessage.fail(400, validCheck.message) )
            return
        }
        let {user_pw, nm} = req.body
        let found=UserData.find(user=>user.user_id === id)
        if(found){
            found.user_pw = user_pw
            found.nm = nm
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:1}))
        }else{
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:0}))
        }
    }
    public delete(req: Request, res: Response , next: NextFunction){
        let id = req.params.id
        let foundIndex = UserData.findIndex(user=>user.user_id === id)
        if(foundIndex > -1){
            UserData.splice(foundIndex, 1)
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:1}))
        }else{
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:0}))
        }

    }
}