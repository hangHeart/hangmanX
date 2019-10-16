import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
//imports router from react-router-dom
//BrowerRouter is used when you have a server that will handle dynamic requests(knows how to respond to any possible URI)
//router creates a history object that keeps track of the current location and re-renders the website whenever that changes
import {BrowserRouter as Router} from "react-router-dom"; 
//need to wrap app in router
//Router components ONLY expect a single child element --> needs to be wrapped on App
//NOTE: MemoryRouter can be used re-use App on the server while switching the router 
ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
