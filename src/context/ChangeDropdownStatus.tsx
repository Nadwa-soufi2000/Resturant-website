import type { childrenStatus, contextChangeDropDown } from "@/types/types-data";
import { createContext, useState } from "react";

export const status = createContext<contextChangeDropDown>({} as contextChangeDropDown)

export default function ChangeStatus({children} : childrenStatus)
{
    const[changeStatus , setChangeStatus] = useState("")
    
    return <status.Provider value={{changeStatus , setChangeStatus}}>{children}</status.Provider>
}
