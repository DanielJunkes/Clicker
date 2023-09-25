import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const ProviderValores = ({children}) =>{
    const [quantPizza, setQuantPizza] = useState(0)
    const [pizzaSeg, setPizzaSeg] = useState(0)
    const [multClick, setMultClick] = useState(1);
    const [multMolho, setMultMolho] = useState(1);

    return(
    <Contexto.Provider value={{quantPizza, setQuantPizza, pizzaSeg, setPizzaSeg, multClick, setMultClick, multMolho, setMultMolho}}>
        {children}
    </Contexto.Provider>
)}