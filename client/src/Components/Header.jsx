import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import homeIcon from '../home.png';
import profileIcon from '../profile.png';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      passwordDisplay: 'none',      
    }
    this.showOptions = this.showOptions.bind(this);
    
  }
  showOptions(){
    if(this.state.display === 'none'){
      this.setState({
        display:'inline-block',
      })
    }else{
      this.setState({
        display:'none',
      })
    }
  }
  render() {
    return (
      <div className="Header">
        <Link to='/dashboard'>
          <img src={homeIcon} alt="Home" className="homeIcon"/>
        </Link>
        <img src={profileIcon} alt="Profile" className="profileIcon" onClick = {this.showOptions}/>
        <div className="userOptions" style={{display:this.state.display}}>
          <h3 className="option" >Change Password</h3>
          <Link to='/'>
            <h3 className="option" >Logout</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;