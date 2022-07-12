import express, { Application, Router} from 'express';
import cors from 'cors'
import {CarRouter} from './router'
import {logger, morganMiddleware} from './config'

export default class Server {
    public app: Application
    public port: number
    //public router: Router

    constructor(port: number){
        this.port = port
        this.app = express()

        this.setupMiddleware()
        this.setupRouter()
    }
    public static init(port: number): Server{
        return new Server(port)
    }
    private setupMiddleware(){
        this.app.use( cors() )
        this.app.use( morganMiddleware )
        this.app.use( express.json() )
        this.app.use( express.urlencoded({ extended: false }) )
    }
    private setupRouter(){
        //car router
        this.app.use('/car', CarRouter);

        // 기본경로나 /user말고 다른곳 진입했을경우 실행
        this.app.use((req, res, next) => { 
            const result = {
                resultCode: '99',
                resultMessage: 'Not Found',
                timestamp : new Date().getTime()
            }
            res.status(404).json( result );
        });        
    }
    public start(callback: Function){
        this.app.listen(this.port, callback());
    }
}