/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express'
// import { getAll } from '../controllers/todos.controller'
import * as QuoteController from '../controllers/quote.controller'
import { validate } from '../utils/validate'
import { createQuote,updateQuote } from '../validators/create-quote.validators'
import { authenticateToken } from '../middleware/authentication.middleware'
const route = express.Router()


route.get('/',authenticateToken,  QuoteController.getAll)
route.post('/', validate(createQuote), authenticateToken, QuoteController.postTodos)
route.patch('/:id',validate(updateQuote),authenticateToken, QuoteController.update)
route.delete('/:id',authenticateToken, QuoteController.remove)
route.get('/:id',authenticateToken,QuoteController.Get)
export default route;

// relational database mo chen 

