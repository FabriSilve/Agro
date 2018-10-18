import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';

import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';


const history = createBrowserHistory();

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>
, document.getElementById('root'));
