import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import io from 'socket.io-client';
import './App.css';
// import LetterWrapper from './letterWrapper';
// import Clue from './clue';
// import HangViewer from './hangViewer';
import Login from './login';
import SignUp from './SignUp';
//import Route AND links to to page --> if we make links that are clickable on page i.e sign-up
import { Route, Link } from 'react-router-dom';
import gameRoom from './gameRoom';
// import { isUserWhitespacable } from "@babel/types";
// https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Login">
        {/* //this is the route to login page using one component
        //To Do: Game Lobby path = '/gameLobby'
        //To Do: Game should be one route path = '/' */}
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Login} />
        <Route path="/game" component={gameRoom} />
      </div>
    );
  }
}

export default hot(module)(App);
