import React, { useContext, useEffect } from "react";
import "./style.css"

import {Contexto} from "../../RouterProvider"


const Contador = () => {

    const {quantPizza} = useContext(Contexto)
    const {setQuantPizza} = useContext(Contexto)

    const {pizzaSeg} = useContext(Contexto)

    const handleSetQuantPizza = () =>{
        setQuantPizza(quantPizza+pizzaSeg)
    }

    useEffect(()=>{
        const intervalId = setInterval(() => {
            handleSetQuantPizza()
        }, 1000)
        return () => clearInterval(intervalId)
    }, [quantPizza, pizzaSeg])

    return(
        <>
            <h1 id="contador">Pizzas: {quantPizza}</h1>
            <p id="contadorSeg">Pizzas por Segundo: {pizzaSeg}</p>
        </>
    );
}

export default Contador