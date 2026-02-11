import type { Dispatch, SetStateAction } from "react"
import type { UseFormRegisterReturn } from "react-hook-form"

export type orderObject = 
{
    id: number,
    title: string,
    price: string,
    image: string
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

export type OrderType = 
{
    id: number,
    title: string,
    price: string,
    image: string,
}

export type actionType = 
  {
    type : string,
    payload : OrderType 
  }

export type stateType = 
{
    Orders: OrderType[],
    numOfProducts: number,
    numOfItems: number,
}

export type contextGlobal = 
{
    Orders: OrderType[],
    numOfProducts: number,
    numOfItems: number,
    ActionTrigger: React.Dispatch<actionType>
}

export type statistics = 
{
   logoimg: string,
   arrowimg: string,
   color1: string,
   color2: string,
   color3: string,
   bgColor: string,
   text: string,
   value: string,
   rating: string
}

export type InputFieldProps = 
{
    label: string,
    Icon: React.ElementType,
    placeholder?: string,
    type?: string,
    register : UseFormRegisterReturn,
    error?: string
}

export type TextAreaFieldProps = 
{
    label: string, 
    Icon: React.ElementType, 
    placeholder?: string, 
    register: UseFormRegisterReturn, 
    error? : string
}

export type ProductData = 
{
    img: string, 
    name: string,
    price: string,
}