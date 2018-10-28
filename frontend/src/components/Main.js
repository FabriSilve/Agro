import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Arena from './Arena';

const Main = () => (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/arena' component={Arena}/>
  </Switch>
);

export default Main;
