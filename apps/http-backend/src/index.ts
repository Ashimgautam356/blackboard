import express from 'express'
import { mainRouter } from './routes/main'

const app = express()

// parsing the input
app.use(express.json())

// init
app.get("/",(req,res)=>{
    res.send("hello world")
})

// using v1
app.use("/api/v1",mainRouter)



// port
app.listen(3001,()=>{
    console.log("--------listing to port 3001 -----------")
})
