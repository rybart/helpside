import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import logo from '../logo.png';
import riskLogo from '../riskLogo.png';

import {getUser} from '../Redux/Actions/action';
import {connect} from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password:"",
            first_name:"",
            last_name:"",
            registerEmail:"",
            registerPassword:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    createUser(e){
        e.preventDefault();
        axios.post(`http://localhost:5000/api/register`, {email:this.state.registerEmail, password:this.state.registerPassword, first_name: this.state.first_name, last_name:this.state.last_name, user_type:'Non-Client' })
            .then((response)=>{
                if(response.data.success){
                    this.props.history.push('/dashboard');
                }else{
                    alert("Incorrect email or password")
                }
            })
            .catch((err)=>{
                console.log(err)
            }) 
    }
    loginUser(e){
        e.preventDefault();
        axios.post(`http://localhost:5000/api/login`, { email:this.state.email, password:this.state.password })
            .then((response)=>{
                if(response.data.success){
                    getUser(response.data.user);
                    this.props.history.push('/dashboard');
                }else{
                    alert("Incorrect email or password")
                }
            })
            .catch((err)=>{
                console.log(err)
            }) 
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

  render() {
    return (
      <div className="Login">
        <div className="nothing">
        <img src={riskLogo} alt="" className="helpsideLoginLogo"/>
        </div>
        <div className="loginCredentials">
            <div className="loginBox">
                <h2 className = 'loginHeader'>Login</h2>
                <input type="email" className="loginInput" placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type="password" className="loginInput" placeholder='Password' name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="loginButton button" onClick={(event)=>{this.loginUser(event)}}>Login</button>
            </div>
            <div className="registerbox">
                <h2 className = 'loginHeader'>Register</h2>
                <input type="text" className="loginInput" placeholder='First Name' name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                <input type="text" className="loginInput" placeholder='Last Name' name="last_name" value={this.state.last_name} onChange={this.handleChange} />                
                <input type="email" className="loginInput" placeholder='Email' name="registerEmail" value={this.state.regsiterEmail} onChange={this.handleChange}/>
                <input type="password" className="loginInput" placeholder='Password' name="registerPassword" value={this.state.regsiterPassword} onChange={this.handleChange}/>
                <button className="registerButton button" onClick={(event)=>{this.createUser(event)}}>Register</button>
            </div>
        </div>
        <div className="footer">
            <img src={logo} alt="" className = 'smallLogo'/>
            <div className = 'contactInfo'>
                <p className="info">
                395 W. 600 N.<br/>
                Lindon, UT 84042<br/>
                Local: (801) 443-1090<br/>
                Toll-Free: 1-800-748-5102<br/>
                </p>
            </div>
        </div>
      </div>
    );
  }
}
export default connect((state) => state)(Login);