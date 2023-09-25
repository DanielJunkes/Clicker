import React, { useContext, useEffect, useState} from "react";
import "./style.css"

import {Contexto} from "../../RouterProvider"

const BotaoMolho = () => {

    const {pizzaSeg} = useContext(Contexto)
    const {setPizzaSeg} = useContext(Contexto)
    const {multMolho} = useContext(Contexto)

    const [quant, setQuant] = useState(0)
    const [preço, setPreço] = useState(10);

    const {quantPizza} = useContext(Contexto)
    const {setQuantPizza} = useContext(Contexto)

    const produção = 0.1 * multMolho

    const handleSetQuant = (valor) => {
        setQuant(quant+valor)
    }

    const handleSetQuantPizza = () => {
        setQuantPizza(quantPizza - preço)
    }

    const handleSetPizzaSeg = (valor) => {
        setPizzaSeg(pizzaSeg+valor)
    }

    const handleSetPreço = () => {
        setPreço(preço+(preço*0.7))
    }

    const comprar = () => {
        handleSetQuantPizza()
        handleSetPreço()
        handleSetQuant(1)
        handleSetPizzaSeg(produção)
    }

    useEffect(()=>{
        const botao = document.getElementById("btnMolho")
        if(quantPizza < preço){
            botao.disabled = true
        }else{
            botao.disabled = false
        }
    }, [quantPizza, preço]);
    
    return(
        <>
            <button title="Produz 0.1 pizzas por segundo" id="btnMolho" onClick={() => comprar()}>Preço: {preço.toFixed(1)}<br/>Comprar Molho<br/>Quantidade: {quant}</button>
        </>
    )
}

export default BotaoMolho