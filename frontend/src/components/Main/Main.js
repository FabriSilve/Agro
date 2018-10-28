import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  App,
  Arena,
} from '../';

const Main = () => (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/arena' component={Arena}/>
  </Switch>
);

export default Main;
