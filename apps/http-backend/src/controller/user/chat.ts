import { Request, Response } from "express";
import {prismaClient} from '@repo/db/client'


// const roomSchema = 

export async function chat(req:Request,res:Response) {
    const roomId = Number(req.params.roomId); 

    const messasges = await prismaClient.chat.findMany({
        where:{
            roomId:roomId
        },
        orderBy:{
            id: "desc"
        },
        take:50
    })

    res.status(200).json({
        messasges
    })
    
}