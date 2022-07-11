export default class ControllerBase {
    constructor(){

    }
    protected fail(code: string = '99', message: string = 'unknown error'):object{
        return {
            resultCode: '99',
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
}