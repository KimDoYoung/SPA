import express  from 'express';
import { CarController } from '../controller'
import { carInsertValidation } from './validator'

const CarRouter = express.Router()

CarRouter.post('/', CarController.instance.insert)
CarRouter.get('/list',  CarController.instance.list)
CarRouter.get('/:id([0-9]+)',  CarController.instance.get)
CarRouter.patch('/',  CarController.instance.update)
CarRouter.delete('/:id([0-9]+)',  CarController.instance.delete)

export default CarRouter;