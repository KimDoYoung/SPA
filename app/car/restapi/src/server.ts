import express, { Application, Request, Response, NextFunction} from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import {CarRouter, UserRouter, FileRouter} from './router'
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
        // this.app.use( express.json() )
        // this.app.use( express.urlencoded({ extended: true }) )
        this.app.use( morganMiddleware )
        this.app.use( bodyParser.json())
        this.app.use( bodyParser.urlencoded({ extended: true }))
    }
    private setupRouter(){
        //car router
        this.app.use('/car', CarRouter);
        this.app.use('/user', UserRouter);
        this.app.use('/file', FileRouter);

        // 404 : 경로가 없을 때
        this.app.use((req: Request, res: Response, next: NextFunction) => { 
            logger.warn(`${req.url} not defined, router not defined!!!`)
            const result = {
                resultCode: '404',
                resultMessage: 'Not Found',
                timestamp : new Date().getTime()
            }
            res.status(404).json( result )
        })
        // Error handling
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => { 
            logger.error("*********************************")
            logger.error("************** ERROR ************")
            logger.error("*********************************")
            err.statusCode = err.statusCode || 500;
            err.message = err.message || "Internal Server Error";
            logger.error("ERROR : " + err.message)
            const result = {
                resultCode: '500',
                resultMessage: err.message,
                timestamp : new Date().getTime()
            }
            res.status(err.statusCode).json(result);
        });        
    }
    public start(callback: Function){
        this.app.listen(this.port, callback());
    }
}