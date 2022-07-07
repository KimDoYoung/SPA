import express, { Application} from 'express';

export default class Server {
    public app: Application
    public port: number
    constructor(port: number){
        this.port = port
        this.app = express()
    }
    static init(port: number): Server{
        return new Server(port)
    }
    start(callback: Function){
        this.displayLogo();
        this.app.listen(this.port, callback());
    }
    private displayLogo():void {
        console.log('----------------------------------------------')
        console.log('server running...')
        console.log('----------------------------------------------')
    }
}