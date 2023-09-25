import React, { useContext, useEffect } from "react";
import "./style.css"

import {Contexto} from "../../RouterProvider"
const Contador = () => {

    const {quantPizza} = useContext(Contexto)
    const {setQuantPizza} = useContext(Contexto)

    const {pizzaSeg} = useContext(Contexto)

    const {multClick} = useContext(Contexto)

    var valorClick = 1 * multClick

    const handleSetQuantPizza = () => {
        setQuantPizza(quantPizza+pizzaSeg)
    }

    useEffect(()=>{
        const intervalId = setInterval(() => {
        handleSetQuantPizza()
        }, 1000)
        return () => clearInterval(intervalId);
    }, [quantPizza, pizzaSeg]);

    return(
        <>
            <h1 id="contador">Pizzas: {quantPizza.toFixed(1)}</h1>
            <p id="contadorSeg">Pizzas por Segundo: {pizzaSeg.toFixed(1)}</p>
            <p id="valorClick">Pizzas por click: {valorClick}</p>
        </>
    );
}

export default Contador