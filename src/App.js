import classes from './App.module.scss';
import React, {useState} from "react";
import Excel from "./components/Excel/ExcelContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import {createStore} from "redux";
import tableReducer from "./components/redux/tableReducer";
import {Provider} from "react-redux";

function App() {
    const store = createStore(tableReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact={true}><Excel/></Route>
                    <Route path={'/dashboard'}><Dashboard/></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
