import React, { useContext } from "react";
import "./style.css"
import pizza from "../../img/pizza.png"

import {Contexto} from "../../RouterProvider"

const Pizza = () => {

    const {quantPizza} = useContext(Contexto)
    const {setQuantPizza} = useContext(Contexto)

    const {multClick} = useContext(Contexto)

    const valorClick = 1 * multClick;

    function handleSetQuantPizza(valor) {
        setQuantPizza(quantPizza + valor);
    }

    return(
        <>
            <img src={pizza} id="pizza" onClick={() => handleSetQuantPizza(valorClick)}/>
        </>
    );
}

export default Pizza