import express from "express"
import quoteRouter from './routes/quote.routes'
import userRouter from './routes/user.route'
import { genericErrorHandler } from "./middleware/error-middleware";
import cors from "cors";
const PORT = 1111;
const app = express() 
app.use(express.json())
app.use(cors())
app.use('/quotes', quoteRouter)
app.use('/users', userRouter)

app.listen(PORT, ()=>{
    console.log('Runnig on port',PORT)
});
app.use(genericErrorHandler)

export default app;