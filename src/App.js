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
      answer: ['a', 'p', 'p', 'l', 'e'],
      disp: ['_', '_', '_', '_', '_'],
      hang: ["Who? Me? I didn't do anything.",
        "Oh. What's that?",
        "No. I don't believe it.",
        "Ahh. Help!!",
        "Glugg."
      ],
      numGuesses: 0 
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
    // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react

    if(this.state.answer.includes(e)){
      for (let i = 0; i < this.state.answer.length; i++){
        if(this.state.answer[i] === e){

          this.setState(prevState => {
            let disp = prevState.disp.slice(); 
            disp[i] = e;
            return {disp};
          })
        }
      }
      console.log("this letter is in apple: ", e)
    }

    this.setState(prevState => {
      let letters = Object.assign({}, prevState.letters);  // creating copy of state variable jasper
      letters[e] = true;                     // update the name property, assign a new value                 
      return { letters };                                 // return new object jasper object
    })
    //console.log("state: ",this.state)
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
        <a href="https://github.com/login/oauth/authorize?client_id=6299af3a88a73b2fd148">Login with Github</a>
        <h1>Hangman X</h1>
        <button onClick={this.onClick}>Send color to everyone</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
        <LetterWrapper 
        letters={this.state.letters} 
        letterClicked = {this.letterClicked}
        answer={this.state.answer}
        disp={this.state.disp}/>
      </div>
    );
  }
}

export default hot(module)(App);