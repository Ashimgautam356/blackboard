"use client"

import {Button} from '@repo/ui/button'

export default function AuthPage({isSignin}:{isSignin:boolean}){

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-2 m-2 bg-white rounded flex flex-col items-center w-96">
                <div className="py-2">
                    <input type="text" placeholder="Email" />
                    
                </div>
                <div className="py-2">
                    <input type="password" placeholder="password" />
                </div>
                <div className="py-2">
                    <Button size='lg' variant='primary' onClick={()=>{}} isDisable={false} name={"signup"}></Button>
                </div>


            </div>
        </div>
    )
}