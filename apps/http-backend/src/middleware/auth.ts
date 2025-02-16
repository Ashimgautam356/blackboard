import { Request, Response,NextFunction } from "express";
import jwt  from "jsonwebtoken";
import {JWT_SECRETE} from "@repo/backend-common/config"


export async function auth(req:Request,res:Response,next:NextFunction) {
    const token = req.headers.authorization ?? ""; 

    if(!token){
        res.status(404).json({
            message:"token not found"
        })
        return 
    }

    try{
        const isValid:any= jwt.verify(token,JWT_SECRETE)
        if(!isValid){
            res.status(403).json({
                message:"invalid token"
            })
            return; 
        }

        req.body.userId = isValid?.userId; 

        next()
        

    }catch(err){
        console.log(err)
    }
    
}