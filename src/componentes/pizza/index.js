import React, { useContext } from "react";
import "./style.css"
import pizza from "../../img/pizza.png"

import {Contexto} from "../../RouterProvider"

const Pizza = () => {

    const {quantPizza} = useContext(Contexto)
    const {setQuantPizza} = useContext(Contexto)

    function handleSetQuantPizza(valor) {
        setQuantPizza(quantPizza + valor);
    }

    return(
        <>
            <div id="container">
                <img src={pizza} id="pizza" onClick={() => handleSetQuantPizza(1)}/>
            </div>
        </>
    );
}

export default Pizza