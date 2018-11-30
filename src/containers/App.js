import React, { Component } from 'react';
import {IndexLink, Link} from 'react-router';
import PropTypes from 'prop-types';
import AddEmployee from '../components/employeeData/addEmployee';
import DashBoard from '../components/dash-board/dashBoard';
import routes from '../routes';
// import logo from './logo.svg';
import './App.css';
import Header from '../components/Header';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
        <routes/>
    )
  }
}

export default App;
