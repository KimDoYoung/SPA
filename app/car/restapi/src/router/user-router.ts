import express  from 'express';
import { UserController, AuthController } from '../controller'
import { UserInsertValidation }  from './validator'

const UserRouter = express.Router()

UserRouter.post('/', UserInsertValidation, UserController.instance.insert)
UserRouter.get('/list',  UserController.instance.list)
UserRouter.get('/:id',  UserController.instance.get)
UserRouter.patch('/:id',  UserController.instance.update)
UserRouter.delete('/:id',  UserController.instance.delete)
UserRouter.post('/login',  AuthController.instance.login)
UserRouter.put('/logout',  AuthController.instance.logout)

export default UserRouter