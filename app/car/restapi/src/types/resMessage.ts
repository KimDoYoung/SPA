export default class ResMesssage {
    constructor() {}
    static success(message: string, data: any) {
        return {
            resultCode: 200,
            resultMessage: message,
            data: data
        };
    }
    static fail(code: number, message: string) {
        return {
            resultCode: code,
            resultMessage: message
        };
    }
}
