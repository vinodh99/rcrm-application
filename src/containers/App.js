import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import AddEmployee from '../components/employeeData/addEmployee';
import DashBoard from '../components/dash-board/dashBoard';
import Routes from '../routes';
import configureStore from '../store/configureStore';
// import logo from './logo.svg';
import './App.css';
// import Header from '../components/Header';
import { Provider } from 'react-redux';

// import logo from './logo.svg';
// import './App.css';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        {/* <Provider store={store}> */}
        <Routes />


        {/* </Provider> */}

      </div>
    )
  }
}

export default App;
