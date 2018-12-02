import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './containers/App';
// import routes from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
    {/* <Provider store={store}> */}
        < App />
    {/* </Provider> */}
    </BrowserRouter>
    , 
    document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
