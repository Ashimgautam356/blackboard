import {Router} from 'express'
import { signup } from '../controller/user/signup'
import { signin } from '../controller/user/signin'
import { room } from '../controller/user/room'
import { auth } from '../middleware/auth'
import { chat } from '../controller/user/chat'

export const userRouter:Router =  Router()


userRouter.post("/signup",signup)
userRouter.post("/signin",signin)

userRouter.use(auth)

userRouter.post("/create-room",room)
userRouter.get("/chats/:roomId",chat)
userRouter.get("/room/:slug",chat)