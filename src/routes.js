import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import DashBoard from "./components/dash-board/dashBoard";
import AddEmployee from './components/employeeData/addEmployee';
import SearchEmployee from './components/employeeData/searchEmployee';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/DashBoard" render={props => <DashBoard {...props} />} />
                <Route exact path="/AddEmployee" render={props => <AddEmployee {...props} />} />
                <Route exact path="/SearchEmployee" render={props => <SearchEmployee {...props} />} />

                <Redirect to="/dashboard" />
            </Switch>
        </BrowserRouter>
    )
};

