export default class Messsage {
    constructor(){

    }
    static success(message: number, data: any ){
        return {
            resultCode : 200,
            resultMessage : message,
            data : data
        }
    }
    static fail(code: number, message:string){
        return {
            resultCode : code,
            resultMessage : message
        }
    }
}
