import React from "react";
import { Link, Route, Routes } from 'react-router-dom';

import PaginaInicial from "./pages/PaginaInicial"

export default () => {
    return (
        <>
            <Routes>
                <Route element = {<PaginaInicial/>} exact path = "/"/>
            </Routes>
        </>
    )
    
}