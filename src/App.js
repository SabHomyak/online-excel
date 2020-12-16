import classes from './App.module.scss';
import React from "react";
import Excel from "./components/Excel/ExcelContainer";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact={true}><Excel/></Route>
                <Route path={'/dashboard'} ><Dashboard/></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
