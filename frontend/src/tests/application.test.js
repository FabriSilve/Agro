import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
} from '../components';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Main without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Arena without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Arena />, div);
  ReactDOM.unmountComponentAtNode(div);
});
