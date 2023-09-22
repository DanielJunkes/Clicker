import React, { useContext, useEffect} from "react";
import "./style.css"

import {Contexto} from "../../RouterProvider"

const BotaoMolho = () => {

    const {pizzaSeg} = useContext(Contexto)
    const {setPizzaSeg} = useContext(Contexto)

    const handleSetPizzaSeg = (valor) => {
        setPizzaSeg(pizzaSeg+valor)
    }
    
    return(
        <>
            <button id="botaoMolho" onClick={() => handleSetPizzaSeg(0.1)}>Comprar Molho</button>
        </>
    )
}

export default BotaoMolho