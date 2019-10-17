import React, { Component } from 'react';
import logo from '../img_folder/team_Hang.jpg';
import { Route, Redirect, Link } from 'react-router-dom';
// import { json } from 'sequelize/types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToGame: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
      const data = {username: this.state.username, password: this.state.password};
    console.log('am I here in this universe');
    fetch('http://localhost:3000/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
        console.log("we are outside the conditional ", data);
        
        if(data.username){
            this.setState({ redirectToGame: true })
        } else {
            alert('that was a bad combo')
        }

    });
    
    event.preventDefault();
}
  

  handleUsernameChange(event) {
    //   let usernameVal = this.state.username
    //   console.log('testing here~', event.target)
    //   console.log('test2',event.target.value)
    this.setState({ username: event.target.value }, () => {
      console.log('username test', this.state.username);
    });
    //   event.preventDefault();
  }

  handlePasswordChange(event) {
     this.setState({ password: event.target.value }, () => {
        console.log('password test', this.state.password);
      });
   }
   
  render() {
    // console.log('testing usernamehere ===>',this.setState({username:event.target.value,password: event.target.value})
    const redirectToGame = this.state.redirectToGame;
    if (redirectToGame) return <Redirect to="/game" />;

    return (
        <React.Fragment>
            <div>
                <img src={logo} alt="logo" className="Logo" ></img>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value ={this.state.password} onChange={this.handlePasswordChange} />
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </div>
        </React.Fragment>
      );
  }
  }

export default Login;
