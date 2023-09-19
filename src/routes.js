import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route component = { Home }  path="/" exact />
            <Route component = { Sobre }  path="/sobre" />
            <Route component = { Usuario }  path="/usuario" />
        </Routes>   
       </BrowserRouter>
   )
}

export default Routes;