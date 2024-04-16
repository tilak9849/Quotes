import express  from "express"
import * as UserController from '../controllers/user.controller'
import { validate } from '../utils/validate'
// import { createTodo } from '../validators/create-quote.validators'
import { createUserDto, createUserDtobody } from "../validators/create-user.validator"
const route = express.Router()



route.post('/signup',validate(createUserDto), UserController.createUser)
route.post('/login', UserController.login)
route.delete('/:id', UserController.remove)

export default route;
