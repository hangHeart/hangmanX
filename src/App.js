import React, { Component } from "react";
import { hot } from "react-hot-loader";
import io from 'socket.io-client';
import "./App.css";

const socket = io.connect("http://localhost:4000");
// https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    socket.on('connect', function () {
      console.log("connecred");
    });

    socket.on('changeColor', function (col) {
      document.body.style.backgroundColor = col
    });
  }

  setColor(color){
    this.setState({ color });
  }

  onClick() {
    socket.emit('changeColor', this.state.color) // change 'red' to this.state.color
  }

  render(){
    
    socket.on('changeColor', (col) => {
      document.body.style.backgroundColor = col
    })

    return(
      <div className="App">
        <h1>{this.state.text}</h1>
        <button onClick={this.onClick}>Send color to everyone</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>
    );
  }

}

export default hot(module)(App);