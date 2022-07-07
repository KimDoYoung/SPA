import express  from 'express';
import {CarController} from '../controller'

const CarRouter = express.Router();

CarRouter.post('/',  CarController.instance.insert);
CarRouter.get('/list',  CarController.instance.list);
CarRouter.get('/:id',  CarController.instance.get);
CarRouter.patch('/:id',  CarController.instance.update);
CarRouter.delete('/:id',  CarController.instance.delete);

export default CarRouter;