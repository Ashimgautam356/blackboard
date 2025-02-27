"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant: "outline"| "primary" | "secondary" | "disable",
  size: "sm" |  "lg" | "xl",
  name:String, 
  onClick: () => void ,
  isDisable:boolean, 
  children?: ReactNode
}

const buttonSize = {
  "sm": "text-sm p-2 rounded-sm",
  "lg": "text-lg p-4 rounded-lg",
  "xl": "text-xl p-2 rounded-xl",
}

const buttonVariant = {
  "outline":"border border-gray-300 cursor-pointer text-gray-700 bg-white hover:text-[#2563EB] hover:border-[#2563EB]",
  "primary":{"text color":"white", backgroundColor:"rgb(0,45,23)", cursor:"pointer"},
  "secondary":"bg-white text-[#2563EB] cursor-pointer ",
  "disable":"bg-gray-900 text-gray-700  cursor-disable "
}



export  const Button = ({variant, size, name, onClick ,isDisable,children }: ButtonProps) => {
  console.log(buttonVariant[variant])
  return (
    <button
      className={`${buttonSize[size]} ${buttonVariant[variant]} `}
      onClick={onClick}
      disabled={isDisable}
    >
      {isDisable?"Loading!!":name}
      {children}
    </button>
  );
};
