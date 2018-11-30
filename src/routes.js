import React from "react";
import { Route, IndexRoute} from 'react-router';

// import {  Switch, Redirect, BrowserRouter } from "react-router-dom";
//import Login from "../components/login/login";
import DashBoard from "./components/dash-board/dashBoard";
// import contentData from '../components/content/index';
import AddEmployee from './components/employeeData/addEmployee';
import SearchEmployee from './components/employeeData/searchEmployee';
import App from "./containers/App";
import HomePage from './components/HomePage';
// import CreateNewRequest from "../components/CreateNewRequest";


// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
// IndexRoute maps HomePage component to the default route

export default (
    <Route path ="/" component ={App}>
        <IndexRoute component ={HomePage} />
        {/* <Route path = 'AddEmployee' component = {AddEmployee} /> */}

        <Route path = 'library' component = {AddEmployee} />

    </Route>
);

// export default (
    // <Route path ="/" component ={App}>
    //     {/* <IndexRoute component ={DashBoard} /> */}
    //     <Route path = 'AddEmployee' component = {AddEmployee} />
    //     <Route path = 'SearchEmployee' component = {SearchEmployee} />
    // </Route>

//     <Route path ="/" component ={App}>
//         <Route path = 'SearchEmployee' component = {SearchEmployee} />
//         <Route path = 'AddEmployee' component = {AddEmployee} />
//     </Route>
// );

// export default () => {
//   return (

    
//     <BrowserRouter>
//       <Switch>
//         {/* <Route exact path="/login" render={props => <Login {...props} />} /> */}
//         <IndexRoute path="/dashBoard" component = {DashBoard} />
//         {/* <Route exact path="/createNewRequest" render={props => <CreateNewRequest {...props} />} /> */}
//         <Route path = 'AddEmployee' component = {AddEmployee} />
//         <Route path = 'SearchEmployee' component = {SearchEmployee} />
//         <Redirect to="/dashBoard" />
//       </Switch>
//     </BrowserRouter>
//   );
// };