import { Request, Response } from "express";
import {RoomSchema} from '@repo/common/types'
import {prismaClient} from '@repo/db/client'


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
                message:"roomId already present"
            })
            return;
        }

        const newRoom = await prismaClient.room.create({
           data:{ slug:slug,
                adminId:userId}
        })

        const roomId = newRoom.id;

       res.status(200).json({
        message:"room created",
        roomId
       })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"internal server error"
        })
    }
    
}