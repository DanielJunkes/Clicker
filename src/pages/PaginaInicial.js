import React from "react";

import Pizza from "../componentes/pizza";
import Contador from "../componentes/contador";
import BotaoMolho from "../componentes/botaoMolho";

const PaginaInicial = () => {
    return (
        <>
            <Contador/>
            <BotaoMolho/>
            <Pizza/>
        </>
    )
}

export default PaginaInicial