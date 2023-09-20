import React, { useContext, useEffect} from "react";
import "./style.css"

import {Contexto} from "../../RouterProvider"

const BotaoMolho = () => {

    const {pizzaSeg} = useContext(Contexto)
    const {setPizzaSeg} = useContext(Contexto)

    const handleSetPizzaSeg = (valor) => {
        setPizzaSeg(valor)
    }

    const handleSetPizzaSeg2 = (valor) => {
        setPizzaSeg(pizzaSeg+valor)
    }

    useEffect(()=>{
        handleSetPizzaSeg(0)
    }, [])

    return(
        <>
            <button id="botaoMolho" onClick={() => handleSetPizzaSeg2(1)}>Comprar Molho</button>
        </>
    )
}

export default BotaoMolho