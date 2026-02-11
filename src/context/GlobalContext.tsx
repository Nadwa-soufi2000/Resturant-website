import type { childrenStatus, contextGlobal, stateType } from "@/types/types-data"
import { createContext, useContext, useReducer } from "react"
import { reducer } from "./Reducer"

export const Global = createContext<contextGlobal>({} as contextGlobal)

const initialState : stateType = {
    Orders: [] ,
    numOfProducts: 0 ,
    numOfItems: 0
}

export default function GlobalContext({children} : childrenStatus) {

  const[state , dispatch] = useReducer(reducer , initialState)

  return <Global.Provider 
           value={{
            Orders : state.Orders,
            numOfProducts: state.numOfProducts,
            numOfItems: state.numOfItems,
            ActionTrigger: dispatch
           }}
         >
          {children}
         </Global.Provider>
}

export const useAction = () =>
{
  return useContext(Global)
}
