import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
// import Login from "../components/Login";
// import Home from "../components/Home";
// import CreateNewRequest from "../components/CreateNewRequest";
// import React from "react";
// import { Route, IndexRoute} from 'react-router';

// import {  Switch, Redirect, BrowserRouter } from "react-router-dom";
//import Login from "../components/login/login";
import DashBoard from "./components/dash-board/dashBoard";
// import contentData from '../components/content/index';
import AddEmployee from './components/employeeData/addEmployee';
import SearchEmployee from './components/employeeData/searchEmployee';
// import HomePage from './components/HomePage';
// import CreateNewRequest from "../components/CreateNewRequest";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';  


// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
// IndexRoute maps HomePage component to the default route
const store = configureStore();

export default () => {
    return (
        // <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/DashBoard" render={props => <DashBoard {...props} />} />
          {/* <Route exact path="/home" render={props => <Home {...props} />} /> */}
          <Route exact path="/AddEmployee" render={props => <AddEmployee {...props} />} />
          <Route exact path="/SearchEmployee" render={props => <SearchEmployee {...props} />} />

          <Redirect to="/DashBoard" />
        </Switch>
      </BrowserRouter>
    //   </Provider>
    )};

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