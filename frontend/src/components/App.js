import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUsername } from '../actions';
import {
  Header,
  Logo,
  H3,
  Input,
  Button,
} from './styledComponents';

import logo from '../assets/fireball.gif';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addUsername(this.state.username);
    this.props.history.push('/arena');
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header>
          <Logo src={logo} />
          <H3>Chose your username!</H3>
          <Input type="text" placeholder="Username" onChange={this.handleChange} />
          <Button onClick={this.handleClick}>Play</Button>
        </Header>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addUsername,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
