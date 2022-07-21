import express, { Application, Request, Response, NextFunction} from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import {CarRouter, UserRouter, FileRouter} from './router'
import {logger, morganMiddleware, config} from './config'
import { ResMessage } from './types'
import { JwtService } from './service'
import  cookieParser from 'cookie-parser'

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
    private authChecker(req: Request, res: Response, next: NextFunction){
        
        const userIdFromToken = JwtService.getUserIdFromRequest(req)
        req.userId = userIdFromToken
        logger.debug('req.userId: ' + req.userId)
        if(!req.userId){
           // res.status(403).json(ResMessage.fail(403,'auth fail middle'))
           if(req.url == '/user/login' || req.url == '/user/logout'){
            return next()
           }
           throw new Error('auth fail')
        }
        next()
    }
    private setupMiddleware(){
        this.app.use( cors() )
        this.app.use( morganMiddleware )
        this.app.use( bodyParser.json())
        this.app.use( bodyParser.urlencoded({ extended: true }))
        this.app.use( cookieParser());
        // this.app.use( this.authChecker )
        let virtualName: string = config.FILE_VIRTURL_NAME!
        let uploadFolder: string = config.FILE_BASE_FOLDER!
        logger.debug(`virtualName: ${virtualName} Upload file folder : ${uploadFolder}`)
        // this.app.use('/repo/upload', express.static('c:/Users/apro/Documents/work/files'));
        this.app.use(virtualName, express.static(uploadFolder));
        //http://localhost:5000/repo/upload/2022/07/1658306875599-ok1.png 
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