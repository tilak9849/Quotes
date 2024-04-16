// import { NETWORK_AUTHENTICATION_REQUIRED } from 'http-status-codes'
import { z }  from 'zod'

export const createquoteDtobody = z.object({
    text: z.string({
        required_error: "Quote is not given "
    }),
   author: z.string({
        required_error: "Author is not given "
    }),
  
}).strict()
export const createQuote= z.object({
    body: createquoteDtobody
})


export const updatequoteDtobody = z.object({
    text: z.string({
        required_error: "Quote is not given "
    }),
   author: z.string({
        required_error: "Author is not given "
    }),
  
}).strict()
export const updateQuote= z.object({
    body: updatequoteDtobody
})


