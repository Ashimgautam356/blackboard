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
        const user:any = prismaClient.user.findFirst(userName); 
        console.log(user)
        if(!user){
            res.status(404).json({
                message:"user not found"
            })
            return; 
        }
        else if(user?.password == bcrypt.compare(password, user?.password)){
            
            const token = jwt.sign({
                id:user?.uuid
            },JWT_SECRETE)
            
            res.status(200).json({
                message:"success",
                token:token
            })

        }
        res.status(403).json({
            message:"password didn't match"
        })

    }catch(err){
        console.log(err)
    }
    
}