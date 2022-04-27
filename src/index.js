import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";

import {rootReducer} from './redux/rootReducer';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare, faBars} from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faBars)

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
