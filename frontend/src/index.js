import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

import { Main } from './components';
import rootReducer from './reducers';

import './styles/index.css';


const history = createBrowserHistory();

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>
, document.getElementById('root'));
