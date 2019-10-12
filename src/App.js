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
      this.letterClicked = this.letterClicked.bind(this); 
    }

  componentDidMount() {
    socket.on('connect', function () {
      console.log("connected");
    });

    // socket.on('changeColor', function (col) {
    //   document.body.style.backgroundColor = col
    // });
  }

  // change state when letter is selected
  letterClicked(e) {
    console.log('letter clicked was:', e);

    https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    this.setState(prevState => {
      let letters = Object.assign({}, prevState.letters);  // creating copy of state variable jasper
      letters[e] = true;                     // update the name property, assign a new value                 
      return { letters };                                 // return new object jasper object
    })
  }

  setColor(color){
    this.setState({ color });
  }

  onClick() {
    socket.emit('changeColor', this.state.color) // change 'red' to this.state.color
  }

  render(){
    console.log('letters state after rendering is', this.state.letters)

    socket.on('changeColor', (col) => {
      document.body.style.backgroundColor = col
    })
    

    return(
      <div className="App">
        <h1>{this.state.answer}</h1>
        <button onClick={this.onClick}>Send color to everyone</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
        <LetterWrapper letters={this.state.letters} letterClicked = {this.letterClicked}/>
      </div>
    );
  }
}

export default hot(module)(App);