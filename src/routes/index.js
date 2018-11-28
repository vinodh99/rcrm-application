import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
//import Login from "../components/login/login";
import Students from "../components/dash-board";
// import CreateNewRequest from "../components/CreateNewRequest";

export default () => {
  return (

    
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/login" render={props => <Login {...props} />} /> */}
        <Route exact path="/dashBoard" render={props => <Students {...props} />} />
        {/* <Route exact path="/createNewRequest" render={props => <CreateNewRequest {...props} />} /> */}

        <Redirect to="/dashBoard" />
      </Switch>
    </BrowserRouter>
  );
};