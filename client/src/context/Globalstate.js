import React, { createContext,useReducer } from "react";
import AppReduser from './AppReducers'

const initialstate = null

//create context

export const GlobalContext = createContext(initialstate)

//provider component

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReduser,initialstate)
    return(
        <GlobalContext.Provider value={{
            state,dispatch
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
