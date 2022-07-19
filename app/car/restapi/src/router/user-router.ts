import express  from 'express';
import { UserController } from '../controller'
import { UserInsertValidation }  from './validator'

const UserRouter = express.Router()

UserRouter.post('/', UserInsertValidation, UserController.instance.insert)
UserRouter.get('/list',  UserController.instance.list)
UserRouter.get('/:id([0-9]+)',  UserController.instance.get)
UserRouter.patch('/:id([0-9]+)',  UserController.instance.update)
UserRouter.delete('/:id([0-9]+)',  UserController.instance.delete)

export default UserRouter;