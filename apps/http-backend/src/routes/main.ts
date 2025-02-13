import {Router} from 'express'
import {userRouter} from './user'


export const mainRouter:Router =  Router()

// user endpoint
mainRouter.use("/user",userRouter)


