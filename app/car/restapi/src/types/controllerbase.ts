import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { logger } from '../config';
import  SqlParams from './sqlparams'
import { Service } from '../service';

export default abstract class ControllerBase {
    constructor(){
        // this.fail = (code: string = '99', message: string = 'unknown error')=>{
        //     return {
        //         resultCode : code, resultMessage: message, timestamp: new Date().getTime()
        //     }
        // }
    }
    protected fail(code: string = '99', message: string = 'unknown error'):object{
        return {
            resultCode: code,
            resultMessage: message,
            timestamp : new Date().getTime()
        }
    }
    // public fail = (code: string = '99', message: string = 'unknown error')=>{
    //     return {
    //         resultCode : code, resultMessage: message, timestamp: new Date().getTime()
    //     }
    // }
    public success(data: object,message: string='OK') {
        return {
            resultCode: '00', resultMessage: 'OK', 
            timestamp: new Date().getTime(),
            data: data
        }
    }
    protected validationCheck(req: Request, title: string=''): {pass: boolean, message: string} {
        const validErrors = validationResult(req);
        let result = { pass: true, message: ''};
        let msgs: string[] = [];
        if(validErrors.isEmpty() == false){
            validErrors.array().forEach(error=>msgs.push(error.msg))
            result.pass = false;
            result.message = msgs.join('|')
            logger.warn(title + ':' + result.message)
        }
        return result;
    }
    public executePromise = (sqlId: string, sqlParams: SqlParams)=>{
        return  Service.instance.execute('car.list', sqlParams);
    }
    public execute(sqlId: string, sqlParams: SqlParams, res: Response){
        // this.executePromise(sqlId, sqlParams)
        Service.instance.execute(sqlId, sqlParams)
        .then( resultData => {
            logger.debug(resultData);
            res.status(200).json(this.success(resultData))
        })
        .catch( error => {
            let errorMessage = new String(error)
            logger.error('[' + errorMessage + ']')
            let result = {
                resultCode: '99',
                resultMessage: errorMessage,
                timestamp : new Date().getTime()
            }
            //res.status(500).json(this.fail())
            res.status(500).json(result)
        })

        // Service.instance.execute('car.list', sqlParams)
        // .then((resultData)=>{
        //     logger.debug(resultData);
        //     res.status(200).json(this.success(resultData))
        // })
        // .catch((error)=>{
        //     logger.error('[' + new String(error) + ']')
        //     res.status(500).json(this.fail())
        // })    

    }
}