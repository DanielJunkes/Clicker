import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const ProviderValores = ({children}) =>{
    const [quantPizza, setQuantPizza] = useState("")

    return(
    <Contexto.Provider value={{rota, setRota, teste, setTeste, usuario, setUsuario, idUsuario, setIdUsuario}}>
        {children}
    </Contexto.Provider>
)}