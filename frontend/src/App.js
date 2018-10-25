import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";
import { connect } from 'react-redux';
import { addUsername } from './actions';
import logo from './assets/fireball.gif';
import './App.css';

const styles = {
  button: {
    width: '10rem',
    height: '3rem',
    borderRadius: '1.5rem',
    margin: '1rem',
  },
  input: {
    width: '20rem',
    height: '3rem',
    margin: '1rem',
    fontSize: '2rem',
    borderRadius: '1.5rem',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Chose your username!
          </p>
          <input style={styles.input} className="bp3-input bp3-round .modifier" type="text" placeholder="Username" dir="auto" onChange={this.handleChange} />
          <Button style={styles.button} className="bp3-round" intent="success" text="Play" onClick={this.handleClick} />
        </header>
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
