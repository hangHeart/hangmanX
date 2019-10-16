import React, { Component } from "react";
import logo from '../img_folder/team_Hang.jpg';
import {Route, Redirect, Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
          username : "",
          password: "",
          redirectToGame: false,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
            console.log('am I here in this universe')
            this.setState({redirectToGame: true});
            event.preventDefault();
        
    }
  
    render() {

        const redirectToGame = this.state.redirectToGame;
        if (redirectToGame) return <Redirect to="/game" />

      return (
          
          <React.Fragment>
              <div>
                  <img src={logo} alt="logo" className = "Logo" ></img>
                  <form onSubmit={this.handleSubmit}>
                      <label>
                          Username:
                          <input type = "text" name = "username"/>
                      </label>
                      <label>
                          Password:
                          <input type = "text" name = "password"/>
                          <input type = "submit" value = "Submit"/>
                      </label>
                  </form>
              </div>
          </React.Fragment>
      )
    }
  }

export default Login;