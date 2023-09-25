import React, { useContext, useEffect, useState } from "react";
import "./style.css"

import {Contexto} from "../../RouterProvider"

const BotaoUpgradeClick = () => {

    const {multClick} = useContext(Contexto)
    const {setMultClick} = useContext(Contexto)

    const {quantPizza} = useContext(Contexto)
    const {setQuantPizza} = useContext(Contexto)

    const [preço, setPreço] = useState(10);

    const handleSetPreço = () => {
        setPreço(preço+(preço*0.7))
    }

    const handleSetQuantPizza = () => {
        setQuantPizza(quantPizza - preço)
    }

    const handleSetMultClick = (valor) =>{
        setMultClick(multClick + valor)
    }

    const [quant, setQuant] = useState(0)

    const handleSetQuant = (valor) => {
        setQuant(quant+valor)
    }

    const upgrade = () => {
        handleSetQuantPizza()
        handleSetPreço()
        handleSetMultClick(1)
        handleSetQuant(1)
    }

    useEffect(()=>{
        const botao = document.getElementById("btnUpgradeClick")
        if(quantPizza < preço){
            botao.disabled = true
        }else{
            botao.disabled = false
        }
    }, [quantPizza, preço]);

    return(
        <>
            <button title="Melhora o click em 1" id="btnUpgradeClick" onClick={()=> upgrade()}>Preço: {preço.toFixed(1)}<br/>Melhorar Click <br/>Quantidade: {quant}</button>
        </>
    )
}

export default BotaoUpgradeClick