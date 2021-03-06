import React from 'react';
import {Link, Navigate} from 'react-router-dom'

import '../App.css'
import logo from '../assets/logo.svg';
import { Input } from '../components/Input.componenet.jsx'
import { Button } from '../components/Button.component.jsx';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailC:"",
      passwordC: "",
    }
  }

  onEmailChange = (event) => {
    this.setState({emailC: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({passwordC: event.target.value});
  }

  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.emailC, this.state.passwordC);
    this.setState({emailC:"", passwordC: ""});
    <Navigate to="/" replace={true}/>
  }

  componentDidMount(){
    const header = document.querySelector('.header');
    header === undefined ? console.log('bad') : header.style.transform = 'translateY(-100%)';
  }

  render(){
    return(
        <div>
          <div className="form-container">
            <Link to='/' replace>
              <img src={logo} alt='logo' className='signin-logo'
              onClick={() => {
                const header = document.querySelector('.header')
                header === undefined ? console.log('bad') : header.style.transform = 'translateY(0%)';
                header.classList.remove('sticky');
                header.classList.add('header-home');
              }}/>
            </Link>

            <form className="form">
              <h1>SIGN IN</h1>
              <div className="input-container">
                <label>Email</label>
                <Input 
                type="text" 
                placeholder="Enter your email"
                onChange={this.onEmailChange}
                class="signin-input-text"/>
              </div>
              <div className="input-container">
                <label>Password</label>
                <Input 
                type="password" 
                placeholder="Enter your password"
                onChange={this.onPasswordChange}
                class="signin-input-password"/>
                {/* <div className="pass-msg"><p>{this.state.passwordC.length < 6 ? "*password must be greater than 6 characters" : ""}</p></div> */}
              </div>
              <Button
              class="btn-block" 
              type="submit"
              text={`sign in`.toUpperCase()}
              onSubmit={this.submit}/>
            </form>
            <p>Don't have an account? <Link to="/signup">{"sign_up".toUpperCase()}</Link> here</p>
            {
              this.props.user.signedIn && <Navigate to="/" replace/>
            }
          </div>
        </div>
    )
  }
}
