import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const ProviderValores = ({children}) =>{
    const [quantPizza, setQuantPizza] = useState("")
    const [pizzaSeg, setPizzaSeg] = useState("")

    return(
    <Contexto.Provider value={{quantPizza, setQuantPizza, pizzaSeg, setPizzaSeg}}>
        {children}
    </Contexto.Provider>
)}