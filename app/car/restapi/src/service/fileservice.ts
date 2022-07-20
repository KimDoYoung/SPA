import path from 'path'
import {config, logger} from '../config'
import fs from 'fs'
import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'


type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void
interface Params {
  [key: string]: any
}

// const fileFilter = (
//   request: Request,
//   file: Express.Multer.File,
//   callback: FileFilterCallback
// ): void => {
//   if (
//       file.mimetype === 'image/png' ||
//       file.mimetype === 'image/jpg' ||
//       file.mimetype === 'image/jpeg'
//   ) {
//       callback(null, true)
//   } else {
//       callback(null, false)
//   }
// }
//const fileUploader = multer({ storage: fileStorage})

class FileUploader {
  private imageOnly: boolean
  private maxSize: number | undefined
  static UploadFoler:string 

  constructor(maxSize: number | undefined, imageOnly:boolean = false){
    this.imageOnly = imageOnly
    this.maxSize = maxSize || (5*1024*1024)
    FileUploader.UploadFoler = this.getDesFolder()
  }

  private getDesFolder = ():string => {
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = today.getMonth() + 1;
    let m = month < 10 ? '0' + month.toString() : month.toString() + '';
    let basePath: string = config.FILE_BASE_FOLDER || ''
  
    let folder = path.join( basePath, year, m);
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    // return 'c:/Users/apro/Documents/work'
    return folder;
  }
  private fileStorage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
      logger.info("uploadFolder : " + FileUploader.UploadFoler)
      callback(null, FileUploader.UploadFoler)
    },
  
    filename: (
        req: Request, 
        file: Express.Multer.File, 
        callback: FileNameCallback
    ): void => {
        // let rightNow = new Date();
        // let dateString = rightNow.toISOString().slice(0,10).replace(/-/g,'');
        let dateString = new Date().getTime()
        let physicalFilename = dateString + '-' + file.originalname;      
        logger.info('physicalfilename : ' + physicalFilename)
        callback(null, physicalFilename)
    }
  })
  private filter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
  ): void => {
    if ( file.mimetype.startsWith('image')) {
        callback(null, true)
    } else {
        callback(null, false)
        const err = new Error('Only .png, .jpg and .jpeg format allowed!')
        err.name = 'ExtensionError'
        return callback(err);
    }
  }
  public getUploader(){
    let multerConfig: Params ={}
    multerConfig.storage = this.fileStorage;
    if(this.imageOnly){
      logger.warn('filter work')
      multerConfig.fileFilter = this.filter
    }
    let maxFileSize = this.maxSize
    multerConfig.limits= { fileSize:  maxFileSize }

    return multer(multerConfig)
  }
}

export default FileUploader