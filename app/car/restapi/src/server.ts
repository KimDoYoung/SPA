import express, { Application, Request, Response, NextFunction} from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import {CarRouter, UserRouter, FileRouter} from './router'
import {logger, morganMiddleware} from './config'
import { ResMessage } from './types';
import { JwtService } from './service';

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
    private tokenChecker(req: Request, res: Response, next: NextFunction){
        const userIdFromToken = JwtService.getUserIdFromRequest(req)
        req.userId = userIdFromToken
        next()
    }
    private setupMiddleware(){
        this.app.use( cors() )
        // this.app.use( express.json() )
        // this.app.use( express.urlencoded({ extended: true }) )
        this.app.use( morganMiddleware )
        this.app.use( bodyParser.json())
        this.app.use( bodyParser.urlencoded({ extended: true }))
        this.app.use( this.tokenChecker )
    }
    private setupRouter(){
        //car router
        this.app.use('/car', CarRouter);
        this.app.use('/user', UserRouter);
        this.app.use('/file', FileRouter);

        // 404 : 경로가 없을 때
        this.app.use((req: Request, res: Response, next: NextFunction) => { 
            logger.warn(`${req.url} not defined, router not defined!!!`)
            res.status(404).json( ResMessage.fail(404, 'Not Found') )
        })
        // Error handling
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => { 
            logger.error("*********************************")
            logger.error("************** ERROR ************")
            logger.error("*********************************")
            err.statusCode = err.statusCode || 500;
            err.message = err.message || "Internal Server Error";
            logger.error("ERROR : " + err.message)
            res.status(err.statusCode).json(ResMessage.fail(500, err.message));
        });        
    }
    public start(callback: Function){
        this.app.listen(this.port, callback());
    }
}