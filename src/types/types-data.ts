import type { Dispatch, SetStateAction } from "react"

export type orderObject = 
{
    id: number,
    name: string,
    price: string,
    img: string
}

export type childrenStatus = 
{
    children: React.ReactNode
}

export type contextChangeDropDown = 
{
   changeStatus: string
   setChangeStatus: Dispatch<SetStateAction<string>>;
}