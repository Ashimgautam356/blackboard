import { Request, Response } from "express";
import { SignupSchema } from "@repo/common/types";
import bcrypt from 'bcrypt'
import {prismaClient} from '@repo/db/client'

// const signupSchema = 

export async function signup(req:Request,res:Response) {
    const {userName,firstName,lastName,password} = req.body
    

    const isValid  = SignupSchema.safeParse({
        userName:userName,
        firstName:firstName,
        lastName:lastName,
        password:password
    })

    if(!isValid.success){
        const fieldMessage = isValid.error.formErrors; 
        res.status(411).json({
            userName:fieldMessage.fieldErrors.userName,
            firstName:fieldMessage.fieldErrors.firstName,
            lastName:fieldMessage.fieldErrors.lastName,
            password:fieldMessage.fieldErrors.password
        })

        return; 
    }

    try{
        const hashedPassword = await bcrypt.hash(password,5)
        const newUser = await prismaClient.user.create({
            data:{
                userName:userName,
                firstName:firstName,
                lastName:lastName,
                password:hashedPassword,
            }
        })

        console.log(newUser)
        res.status(200).json({
            message:"success"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"internal server error"
        })
    }
    
}