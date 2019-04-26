import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './pages/Main';
import Jogar from './pages/Jogar';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} /> 
            <Route path="/jogar" component={Jogar} />
        </Switch>
    </BrowserRouter>
);
//exact para garantir q a rota vai ser exatamente igual
export default Routes;