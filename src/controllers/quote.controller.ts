/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction,Request,Response } from "express"
import * as QuoteService from '../services/quote.service'
import { number } from "zod"
import HttpStatus from 'http-status-codes';

export const getAll = async(req: Request,res: Response,next: NextFunction)=>{
    
    try {
      console.log((req as any).user)
      const data = await QuoteService.getAll()
      res.json(data)
  } catch (err) {
      next(err)
  
}
}

export const postQuotes =async(req: Request, res:Response) =>{
    const quote: any  = req.body
    console.log(req.body,'is request body')
    const quotes =await QuoteService.postQuotes(req.body,  (req as any).user.userId)
    res.status(HttpStatus.CREATED).send(quotes)
}


export const update = async (req: Request, res: Response, next: NextFunction) => {
  try{
      const { id } = req.params
  const loggedInUserId = (req as any).user.userId;

  // @TODO: Handle errors
  const updates = await QuoteService.update(Number(id), req.body, loggedInUserId)

  res.status(HttpStatus.CREATED).json(updates)
  } catch(e) {
      next(e)
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try{
      const { id } = req.params
      // @TODO: Handle errors
      
      const removes = await QuoteService.remove(Number(id), (req as any).user.userId)
      res.status(HttpStatus.NO_CONTENT).json(removes)
  
  } catch(e)  {
      next(e)
  }
}

  
//   export const Get = async (req: Request,res: Response,next: NextFunction)=>{
    
//     const id = Number(req.params.id)
//     console.log(id)

//     try{

//     const quotes = await QuoteService.Get(id)
//     res.status(HttpStatus.OK).send(quotes)
//     }catch(err){
// next(err)
//     }

// }
  

