import React, { Component } from "react";
import logo from '../img_folder/team_Hang.jpg';

class Login extends Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
          <React.Fragment>
              <div>
                  <img src={logo} alt="logo" className = "Logo" ></img>
                  <form>
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