import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { logger } from '../config';
import { SqlParams, ResMessage} from '../types'
import { Service } from '../service';

export default abstract class ControllerBase {
    constructor(){
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
    public  execute(sqlId: string, sqlParams: SqlParams){
        return  Service.instance.execute(sqlId, sqlParams);
    }
    /**
     * 1개의 sqlId를 수행하고 결과를 리턴할 때
     * @param sqlId 
     * @param sqlParams 
     * @param res 
     */
    public executeAndDone(sqlId: string, sqlParams: SqlParams, res: Response){
        // this.executePromise(sqlId, sqlParams)
        Service.instance.execute(sqlId, sqlParams)
        .then( resultData => {
            logger.debug(resultData);
            res.status(200).json(ResMessage.success('OK', resultData))
        })
        .catch( error => {
            let errorMessage = new String(error)
            logger.error('[' + errorMessage + ']')
            let result = {
                resultCode: '500',
                resultMessage: errorMessage,
                timestamp : new Date().getTime()
            }
            res.status(500).json(result)
        })
    }
}