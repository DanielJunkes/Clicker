import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const ProviderValores = ({children}) =>{
    const [quantPizza, setQuantPizza] = useState(0)
    const [pizzaSeg, setPizzaSeg] = useState(0)

    return(
    <Contexto.Provider value={{quantPizza, setQuantPizza, pizzaSeg, setPizzaSeg}}>
        {children}
    </Contexto.Provider>
)}