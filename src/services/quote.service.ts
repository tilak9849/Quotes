import { Prisma, PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom";
const prisma = new PrismaClient({
});



export const getAll = async() => {
    return prisma.quote.findMany({

    })
}

export const postQuotes = async (quote:any, userId: number) =>{
    try{
        return await prisma.quote.create({  
            data:{
                userId: userId,
                text:quote.text,
                author : quote.author
            }
            
        })
    }catch(err:any){
        throw Boom.forbidden("You can not post")
    }
  
}


export const update= async (id: number, quote: any, loggedInUserId: number) => {
    const quoteToUpdate = await prisma.quote.findFirstOrThrow({where: {id}})
    if(quoteToUpdate.userId != loggedInUserId) {
        throw Boom.forbidden('You cannnot do thissss')
    }
    return await prisma.quote.update({
        where: { id: Number(id) },
        data: {
           
            text:quote.text,
            author : quote.author
        },
    })
}
export const remove = async (id: number, loggedInUserId: number) => {
    try {
        const quote = await prisma.quote.findUnique({
            where: {
                id: Number(id),
            },
            select: {
                userId: true,
            },
        });
  
        if (!quote) {
            throw Boom.notFound("Quote not found");
        }
  
        if (quote.userId !== loggedInUserId) {
            throw Boom.forbidden("This ain't your quote");
        }
  
        return await prisma.quote.delete({
            where: {
                id: Number(id),
            },
        });
    } catch (error: any) {
        console.log('Something terrible is happening', error);
        throw error; // Re-throw the error to propagate it further
    }
  };




  export const Get = async (id: number ) =>{
    try{
         return await prisma.quote.findFirstOrThrow({
            where:{id:Number(id) },
        })

    } catch (err: any){
      console.log(err)
      if(err.code === 'P2025'){
      throw Boom.notFound("ERROR QUOTE NOT FOUND")
}else{
    throw err
}
}
}
