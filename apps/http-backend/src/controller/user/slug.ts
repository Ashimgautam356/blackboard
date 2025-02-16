import { Request, Response } from "express";
import {prismaClient} from '@repo/db/client'


// const roomSchema = 

export async function slug(req:Request,res:Response) {
    const slug = req.params.slug; 
     
    const room = await prismaClient.room.findFirst({
        where:{
            slug
        }
    })

    res.status(200).json({
        room
    })
    
}