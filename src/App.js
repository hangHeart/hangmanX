import React, { Component } from "react";
import { hot } from "react-hot-loader";
import io from 'socket.io-client';
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello, World! </h1>
      </div>
    );
  }

  componentDidMount() {
    const socket = io.connect("http://localhost:4000");
    socket.on('connect', function () {
      console.log("connecred");
    });

    socket.on('news', function (data) {
      console.log("news", data);
    })

  }

}

export default hot(module)(App);