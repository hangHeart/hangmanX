import React, { Component } from "react";
import { hot } from "react-hot-loader";
import io from 'socket.io-client';
import "./App.css";
import LetterWrapper from './letterWrapper'

const socket = io.connect("http://localhost:4000");
// https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      letters: {
        'a': false,
        'b': false,
        'c': false,
        'd': false,
        'e': false,
        'f': false,
        'g': false,
        'h': false,
        'i': false,
        'j': false,
        'k': false,
        'l': false,
        'm': false,
        'n': false,
        'o': false,
        'p': false,
        'q': false,
        'r': false,
        's': false,
        't': false,
        'o': false,
        'p': false,
        'q': false,
        'r': false,
        's': false,
        't': false,
        'u': false,
        'v': false,
        'w': false,
        'x': false,
        'y': false,
        'z': false,
      },
      answer: 'apple',
      disp: '_____'
      }
      this.onClick = this.onClick.bind(this);
    }

  componentDidMount() {
    socket.on('connect', function () {
      console.log("connected");
    });

    // socket.on('changeColor', function (col) {
    //   document.body.style.backgroundColor = col
    // });
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
        <a href="https://github.com/login/oauth/authorize?client_id=6299af3a88a73b2fd148">Login with Github</a>
        <h1>{this.state.answer}</h1>
        <button onClick={this.onClick}>Send color to everyone</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
        <LetterWrapper />
      </div>
    );
  }
}

export default hot(module)(App);