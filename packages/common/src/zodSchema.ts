import z from 'zod'


export const SignupSchema = z.object({
    userName:z.string().email().min(3).max(20),
    firstName:z.string().min(3).max(20),
    lastName:z.string().min(3).max(20),
    password:z.string().min(3).max(20),
})

export const SinginSchema = z.object({
    userName:z.string().email().min(3).max(20),
    password:z.string().min(3).max(20),
})


export const RoomSchema = z.object({
    roomId:z.string().email().min(3).max(20),
    password:z.string().min(3).max(20),
})



