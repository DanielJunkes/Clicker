import React from "react";

import Pizza from "../componentes/pizza";
import Contador from "../componentes/contador";
import BotaoMolho from "../componentes/botaoMolho";
import BotaoUpgradeClick from "../componentes/botaoUpgradeClick";

const PaginaInicial = () => {
    return (
        <>
            <Contador/>
            <BotaoMolho/>
            <BotaoUpgradeClick/>
            <Pizza/>
        </>
    )
}

export default PaginaInicial