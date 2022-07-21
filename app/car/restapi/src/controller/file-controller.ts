import express, { Request, Response, NextFunction } from 'express';
import {logger} from '../config'
import { ResMessage } from '../types';

export default class FileController{

    private static _instance: FileController
    private constructor(){
        logger.debug('FileController intialize...')        
    }
    public static get instance(): FileController {
        return this._instance || (this._instance = new this())
    }
    private fileInfo(file: Express.Multer.File){
        logger.debug('--------------------file info start------------------------------')
        logger.debug('filename: ' + file.filename)
        logger.debug('originalname: ' + file.originalname)
        logger.debug('mimetype: ' + file.mimetype)
        logger.debug('destination: ' + file.destination)
        logger.debug('filename: ' + file.filename)
        logger.debug('path: ' + file.path)
        logger.debug('size: ' + file.size)
        logger.debug('--------------------file info end------------------------------')
    }
    public upload(req: Request, res: Response , next: NextFunction){
        //const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        // const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = req.file
        if(!req.file) {
            throw new Error('file upload fail')
        }
        const file = req.file as Express.Multer.File
        this.fileInfo(file)
        res.status(200).json(ResMessage.success('OK',{message: 'single file upload OK'}))
    }
    public uploads(req: Request, res: Response , next: NextFunction){
        let files = req.files as Array<Express.Multer.File>
        if(!files || files.length < 1){
            res.status(500).json(ResMessage.fail(500, 'file upload fail'))
            return
        }
        let fileNames: string[] = []
        files.forEach(file=>{
            fileNames.push(file.originalname)
        })
        let count =  fileNames.length
        res.status(200).json(ResMessage.success('OK',{ count, fileNames: fileNames.join()}))
        
    }
    public download(req: Request, res: Response , next: NextFunction){
        let id = req.params.id;
        logger.debug('download file id : ' + id)
        //let file = getFilePath(id)
        //res.download(file)
        res.status(200).json(ResMessage.success('OK',{}))
    }

    public list(req: Request, res: Response , next: NextFunction){
        res.status(200).json(ResMessage.success('OK',{message: 'list OK'}))
    }
    public delete(req: Request, res: Response , next: NextFunction){
        res.status(200).json(ResMessage.success('OK',{message: 'delete OK'}))
    }
}