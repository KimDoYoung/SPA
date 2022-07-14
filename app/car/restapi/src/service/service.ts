import mybatisMapper  from 'mybatis-mapper'
import path from 'path'
import { Response } from 'express';
import { MariaDB } from '../database';
import {SqlParams, ServiceBase} from '../types'
import { logger } from '../config';

export default class Service extends ServiceBase{
    private static _instance: Service
    
    private constructor(){
        super()
    }
    public static get instance(): Service{
        return this._instance || (this._instance = new this())
    }
    public execute(sqlId: string, sqlParams: SqlParams){
        try {
            let sql = super.getSqlStatement(sqlId, sqlParams)
            logger.debug('sql:[' + sql + ']')
            return MariaDB.instance.executeQuery(sql)            
        } catch (error) {
            logger.error(error)
            return new Promise((resolve, reject) => {
                reject(new Error('sql error'));
            })
        }
    }

    public list(sqlId: string, sqlParams: SqlParams){
        try {
            let sql = super.getSqlStatement(sqlId, sqlParams)
            return MariaDB.instance.executeQuery(sql)            
        } catch (error) {
            console.error(error)
            return new Promise((resolve, reject) => {
                reject(new Error('sql error'));
            })
        }
    }
    public delete(sqlId: string, sqlParams: SqlParams){
        try {
            let sql = super.getSqlStatement(sqlId, sqlParams)
            return MariaDB.instance.executeQuery(sql)            
        } catch (error) {
            console.error(error)
            return new Promise((resolve, reject) => {
                reject(new Error('sql error'));
            })
        }
    }
}