import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { udpateNumber } from './actions';
import socketIOClient from "socket.io-client";

const styles = {
  button: {
    width: '10rem',
    height: '3rem',
    borderRadius: '1.5rem',
    margin: '1rem',
  },
};

class Arena extends Component {

  constructor() {
    super();
    this.state = {
      socket: null,
      number: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const socket = socketIOClient('http://localhost:5000');
    socket.on("NUMBER_UPDATED", data => this.setState({ number: data.number }));
    socket.emit('NEW_PLAYER', { username: this.props.username });
    console.log(socket);
    this.setState({ socket: socket })
  }

  handleClick() {
    console.log(this);
    this.state.socket.emit('INCREMENT_NUMBER', {});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Username: {this.props.username}</p>
          <button style={styles.button} onClick={this.handleClick}>Number: {this.state.number}</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  username: user.username,
  number: user.number,
});

const mapDispatchToProps = {
  udpateNumber,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arena)
