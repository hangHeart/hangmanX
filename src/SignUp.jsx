import React, { Component } from 'react';
import logo from '../img_folder/team_Hang.jpg';
import { Route, Redirect, Link } from 'react-router-dom';
// import { json } from 'sequelize/types';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToGame: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = document.querySelector('#userName').value;
    const password = document.querySelector('#userPassword').value;
    const data = { name, password };
    // console.log('am I here in this universe');
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('we are outside the conditional ', data);
        window.location.href = '/game';
      });
  }

  render() {
    // console.log('testing usernamehere ===>',this.setState({username:event.target.value,password: event.target.value})
    const redirectToGame = this.state.redirectToGame;
    if (redirectToGame) return <Redirect to="/game" />;

    return (
      <React.Fragment>
        <div>
          <img src={logo} alt="logo" className="Logo"></img>
          <h1>Sign Up!!!</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input id="userName" type="text" name="username" />
            </label>
            <label>
              Password:
              <input id="userPassword" type="password" name="password" />
              <input type="submit" value="Submit" />
            </label>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
