import { Request, Response } from "express";
import {RoomSchema} from '@repo/common/types'
import jwt from 'jsonwebtoken'

// const roomSchema = 

export async function room(req:Request,res:Response) {
    const {roomId,password} = req.body
    

    const isValid  = RoomSchema.safeParse({
        roomId:roomId,
        password:password
    })

    if(!isValid.success){
        const fieldMessage = isValid.error.formErrors; 
        res.status(411).json({
            roomId:fieldMessage.fieldErrors.roomId,
            password:fieldMessage.fieldErrors.password
        })

        return; 
    }

    try{
       const token = jwt.sign({
        id:"asdfa"
       },'roomsecrete')

       res.status(200).json({
        roomId:token
       })
    }catch(err){
        console.log(err)
    }
    
}