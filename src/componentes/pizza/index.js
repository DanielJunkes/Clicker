import React from "react";
import "./style.css"
import pizza from "../../img/pizza.png"

const Pizza = () => {
    return(
        <>
            <div id="container">
                <img src={pizza} id="pizza"/>
            </div>
        </>
    );
}

export default Pizza