import { Request, Response } from "express";
import { SinginSchema } from "@repo/common/types";
import jwt from 'jsonwebtoken'
import {JWT_SECRETE} from '@repo/backend-common/config'
import {prismaClient} from '@repo/db/client'
import bcrypt from 'bcrypt'

// const signinSchema = 
export type UserType = {
    uuid:string,
    userName:string,
    password:string,
    firstName:string,
    lastName:string,
    photo?:string, 
    createdAt: Date
}


export async function signin(req:Request,res:Response) {
    const {userName,password} = req.body
    

    const isValid  = SinginSchema.safeParse({
        userName:userName,
        password:password
    })

    if(!isValid.success){
        const fieldMessage = isValid.error.formErrors; 
        res.status(411).json({
            userName:fieldMessage.fieldErrors.userName,
            password:fieldMessage.fieldErrors.password
        })

        return; 
    }
    
    
    try{
        const user:any =await prismaClient.user.findFirst({
            where:{
                userName:userName
            }
        }); 
        const isCorrect = await bcrypt.compare(password, user?.password)
        if(!user){
            res.status(404).json({
                message:"user not found"
            })
            return; 
        }

        if(!isCorrect){
            res.status(403).json({
                message:"password didn't match"
            })
            return;    
        }

        const token = jwt.sign({
            userId:user?.id
        },JWT_SECRETE)
        

        res.status(200).json({
            message:"success",
            token:token
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"internal server error"
        })
    }
    
}