/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction,Request,Response } from "express"
import * as QuoteService from '../services/quote.service'
import { number } from "zod"
import HttpStatus from 'http-status-codes';

export const getAll = async(req: Request,res: Response,next: NextFunction)=>{
    
    try {
      console.log((req as any).user)
      const loggedInuserId = (req as any).user.userId;
      const data = await QuoteService.getAll()
      res.json(data)
  } catch (err) {
      next(err)
  
}
}

export const postTodos =async(req: Request, res:Response) =>{
    const quote: any  = req.body
    console.log(req.body,'is request body')
    const quotes =await QuoteService.postTodos(req.body,  (req as any).user.userId)
    res.status(HttpStatus.CREATED).send(quotes)
}


export const update = async (req: Request, res:Response, next:NextFunction)  =>{
  const quote:any  = req.body
  const id = Number(req.params.id)
 try{
  
const quotes = await QuoteService.update(id,quote)
res.status(HttpStatus.OK).send(quotes)
 }catch(err){
  next(err)
 }
}


  export const remove = async  (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    console.log(id, ' request params ko id yo ho hai')
    try {
    const quotes = await QuoteService.remove(id)
    res.status(HttpStatus.NO_CONTENT).send()
  }catch(err){
    next(err)
  }
  }


  
  export const Get = async (req: Request,res: Response,next: NextFunction)=>{
    
    const id = Number(req.params.id)
    console.log(id)

    try{
    const quotes = await QuoteService.Get(id)
    res.status(HttpStatus.OK).send(quotes)
    }catch(err){
next(err)
    }

}
  

