import { Request } from 'express';
import { validationResult } from 'express-validator';
import { logger } from '../config';

export default class ControllerBase {
    constructor(){

    }
    protected fail(code: string = '99', message: string = 'unknown error'):object{
        return {
            resultCode: code,
            resultMessage: message,
            timestamp : new Date().getTime()
        }
    }

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
}