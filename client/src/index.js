import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux
import { applyMiddleware } from 'redux';
import {createStore} from 'redux';
//react redux
import {Provider} from 'react-redux';
//Promise-middleware
import promiseMiddleware from 'redux-promise-middleware';
// reducers
import reducers from './Redux/Reducers/reducer';
import {getUser} from './Redux/Actions/action';


const devTools = window.devToolsExtension && window.devToolsExtension();
const middleware = applyMiddleware(promiseMiddleware());

const store = createStore(reducers, devTools, middleware);


ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);