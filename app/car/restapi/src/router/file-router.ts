import express  from 'express';
import { FileController } from '../controller'
import { FileUploader } from '../service'

const imageUploader = new FileUploader(10*1024*1024, true).getUploader()
const fileUploader = new FileUploader(10*1024*1024).getUploader()

const FileRouter = express.Router()
FileRouter.post('/upload', imageUploader.single('file'),  FileController.instance.upload)
FileRouter.post('/uploads', imageUploader.array('files', 10),  FileController.instance.uploads)
FileRouter.get('/download/:id',  FileController.instance.download)

FileRouter.delete('/:id',  FileController.instance.delete)
FileRouter.post('/list',  FileController.instance.list)

export default FileRouter;