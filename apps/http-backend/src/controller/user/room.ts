import { Request, Response } from "express";
import {RoomSchema} from '@repo/common/types'
import jwt from 'jsonwebtoken'
import {prismaClient} from '@repo/db/client'
import { JWT_SECRETE } from "@repo/backend-common/config";


// const roomSchema = 

export async function room(req:Request,res:Response) {
    const {slug,userId} = req.body

    const isValid  = RoomSchema.safeParse({
        slug:slug,
       
    })

    if(!isValid.success){
        const fieldMessage = isValid.error.formErrors; 
        res.status(411).json({
            slug:fieldMessage.fieldErrors.slug,
            password:fieldMessage.fieldErrors.password
        })

        return; 
    }

    try{
        const alreadyPresent = await prismaClient.room.findFirst({
            where:{
                slug:slug
            }
        })
        if(alreadyPresent){
            res.status(403).json({
                message:"name already perest"
            })
            return;
        }

        const newRoom = await prismaClient.room.create({
           data:{ slug:slug,
                adminId:userId}
        })

        const token = jwt.sign({
            id:newRoom.id
        },JWT_SECRETE)

       res.status(200).json({
        roomId:token,
        message:"room created"
       })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"internal server error"
        })
    }
    
}