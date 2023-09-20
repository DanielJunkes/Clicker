import React, { useContext, useEffect } from "react";
import "./style.css"

import {Contexto} from "../../RouterProvider"


const Contador = () => {

    const {quantPizza} = useContext(Contexto)
    const {setQuantPizza} = useContext(Contexto)

    const handleSetQuantPizza = (valor) =>{
        setQuantPizza(valor)
    }

    useEffect(()=>{
        handleSetQuantPizza(0)
    }, [])

    return(
        <>
            <h1 id="contador">Pizzas: {quantPizza}</h1>
        </>
    );
}

export default Contador