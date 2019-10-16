import React, { Component } from "react";
import { hot } from "react-hot-loader";
import io from 'socket.io-client';
import "./App.css";
// import LetterWrapper from './letterWrapper';
// import Clue from './clue';
// import HangViewer from './hangViewer';
import Login from './login';
//import Route AND links to to page --> if we make links that are clickable on page i.e sign-up
import {Route, Link} from 'react-router-dom';
import gameRoom from './gameRoom'
import { isUserWhitespacable } from "@babel/types";
// https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3

class App extends Component{

  constructor(props) {
    super(props);
  //   this.state = {
  //     color: 'red',
  //     letters: {
  //       'a': false,
  //       'b': false,
  //       'c': false,
  //       'd': false,
  //       'e': false,
  //       'f': false,
  //       'g': false,
  //       'h': false,
  //       'i': false,
  //       'j': false,
  //       'k': false,
  //       'l': false,
  //       'm': false,
  //       'n': false,
  //       'o': false,
  //       'p': false,
  //       'q': false,
  //       'r': false,
  //       's': false,
  //       't': false,
  //       'o': false,
  //       'p': false,
  //       'q': false,
  //       'r': false,
  //       's': false,
  //       't': false,
  //       'u': false,
  //       'v': false,
  //       'w': false,
  //       'x': false,
  //       'y': false,
  //       'z': false,
  //     },
  //     gameStore: [
  //       [["It is the thing you might cut yourself on if you reach out to touch the world like a ball"],
  //       ['m','o','u','n','t','a','i','n'],
  //       ['_','_','_','_','_','_','_','_']],


  //       [["It's breezy."],
  //       ["f","l","i","g","h","t","y"],
  //       ["_","_","_","_","_","_","_"]],


  //       [["It hangs in the sky, before it falls, but you do not want to avoid it."],
  //         ['a', 'p', 'p', 'l', 'e'],
  //         ['_', '_', '_', '_', '_']]
  //     ],
  //     clue: "loading",
  //     answer: [],
  //     disp: [],
  //     hang: [
  //       "I'm having a great day and nothing can go wrong.",
  //       "Who? Me? I didn't do anything.",
  //       "Oh. What's that?",
  //       "Who's on trial?",
  //       "I'm on trial?",
  //       "I'm guilty?",
  //       "No. I don't believe it.",
  //       "Ahh. Help!!",
  //       "Glugg.",
  //       "The End,"
  //     ],
  //     numFailedGuesses: 0
  //   }
  //     this.gameEnded = this.gameEnded.bind(this);
  //     this.letterClicked = this.letterClicked.bind(this);
  //     this.socket = io.connect("https://hangmanx-cs.herokuapp.com");
  //   }

  // componentDidMount() {
  //   this.socket.on('connect', function () {
  //     console.log("connected");
  //   });

  //   this.socket.on('clickedLetter', (e) => {
  //     this.setState(prevState => {
  //       let letters = Object.assign({}, prevState.letters);
  //       letters[e] = true;
  //       return { letters };
  //     });
  //     if(this.state.answer.includes(e)){
  //       for (let i = 0; i < this.state.answer.length; i++){
  //         if(this.state.answer[i] === e){
  //           this.setState(prevState => {
  //             let disp = prevState.disp.slice(); 
  //             disp[i] = e;
  //             return {disp};
  //           })
  //         }
  //       }
  //     } else {
  //       this.setState({numFailedGuesses: this.state.numFailedGuesses+1})
  //     }
  //   });

  //   const index = Math.floor(Math.random()*3)
  //   this.setState({clue : this.state.gameStore[index][0],
  //                   answer: this.state.gameStore[index][1],
  //                   disp : this.state.gameStore[index][2]})


  // }

  // componentDidUpdate() {
  //   this.gameEnded();
  // }

  // gameEnded() {
  //   console.log('triggered');
  //   // check for failure case
  //   const maxFailedGuesses = this.state.hang.length - 1;
  //   console.log('max failed gusses', maxFailedGuesses)
  //   if (this.state.numFailedGuesses === maxFailedGuesses){
  //     alert(" game over")
  //   };
  //   // check for success case
  //   if(this.state.disp.join('') == this.state.answer.join('')) {
  //     alert('success');
  //   }
  // }


  // // change state when letter is selected
  // letterClicked(e) {

  //   this.socket.emit("clickedLetter", e);

  //   console.log('letter clicked was:', e);
  //   // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react

  //   if(this.state.answer.includes(e)){
  //     for (let i = 0; i < this.state.answer.length; i++){
  //       if(this.state.answer[i] === e){

  //         this.setState(prevState => {
  //           let disp = prevState.disp.slice(); 
  //           disp[i] = e;
  //           return {disp};
  //         })
  //       }
  //     }
  //     console.log("this letter is in apple: ", e)
  //   }
  //   // else {
  //   //   this.setState({numFailedGuesses: this.state.numFailedGuesses+1})
  //   // }

  //   this.setState(prevState => {
  //     let letters = Object.assign({}, prevState.letters);  // creating copy of state variable jasper
  //     letters[e] = true;                     // update the name property, assign a new value                 
  //     return { letters };                                 // return new object jasper object
  //   })

  // }
  }
  render() {
  
    // console.log('letters state after rendering is', this.state.letters)

    // this.socket.on('changeColor', (col) => {
    //   document.body.style.backgroundColor = col
    // });
    
    return(
      <div className="Login">
        {/* //this is the route to login page using one component
        //To Do: Game Lobby path = '/gameLobby'
        //To Do: Game should be one route path = '/' */}
        <Route exact path ='/' component={Login}/>
        <Route path = '/game' component ={gameRoom}/>
        {/* <a href="https://github.com/login/oauth/authorize?client_id=6299af3a88a73b2fd148">Login with Github</a>
        <h1>Hangman X</h1>
        <h2>Hey handsomeeeeeee ;)</h2>
        <h3>Stop looking at our screen </h3>
        <Clue clue={this.state.clue}/>
        <HangViewer
          hang={this.state.hang}
          numFailedGuesses={this.state.numFailedGuesses}
        />
        <LetterWrapper 
          letters={this.state.letters} 
          letterClicked = {this.letterClicked}
          answer={this.state.answer}
          disp={this.state.disp}/> */}
      </div>
    );
  }
}

export default hot(module)(App);

/**
 *  "serve": "nodemon server/server.js",
    "dev": "npm run serve & webpack-dev-server --mode development --open",
    "start": "node server/server.js",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
 */