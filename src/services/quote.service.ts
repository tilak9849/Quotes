import { Prisma, PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom";
import { any } from "zod";
import { query } from "express";
const prisma = new PrismaClient({
});

// export async function mainseender() {
//     try{
//         await prisma.todo.delete({where: {id:2}})
//     } catch(err){
//         console.log(err, " testing hudai xa ")
//     }
    
// }

export const getAll = async() => {
    return prisma.quote.findMany({

    })
}


export const update = async (id: number, quote: any) => {
try {
   return await prisma.quote.update({
    data:{
        text:quote.text,
        author : quote.author
    },
   
    where:{
        id: Number(id)
    }
})
}catch (err: any){
    // console.log("Error po aayo haii hajur ") 
    console.log(err)
    if(err.code === 'P2025'){
    throw Boom.notFound("Change garna khojeko data xaina haii hajur")
}else{
  throw (err)
}
}
}


export const postTodos = async (quote:any, userId: number) =>{
    try{
        return await prisma.quote.create({  
            data:{
                userId: userId,
                text:quote.text,
                author : quote.author
            }
            
        })
    }catch(err:any){
        throw Boom.forbidden("Post garna mildaina")
    }
  
}

// export const update  = async (id: string, todo: any) => {
   
//         await prisma.todo.update({where: {id:2}})

    
// }

export const remove = async (id: any) =>{
    try{
        return  await prisma.quote.delete({where: {id:id}})

    }catch(err:any){
       
    
    console.log(err)
    if(err.code === 'P2025'){
    throw Boom.notFound("DATA NOT FOUND TO DELETE")
}else{
  throw err
}
}
}

export const Get = async (id: number ) =>{
    try{
         return await prisma.quote.findFirstOrThrow({
            where:{id:Number(id) },
        })
        return "Naya Api banyo"
    } catch (err: any){
      console.log("Error po aayo haii hajur ") 
      console.log(err)
      if(err.code === 'P2025'){
      throw Boom.notFound("ERROR DATA NOT FOUND")
}else{
    throw err
}
}
}