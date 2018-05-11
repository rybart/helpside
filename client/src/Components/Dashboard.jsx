import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as Actions from '../Redux/Actions/action'
import {getUser} from '../Redux/Actions/action';
import {connect} from 'react-redux';

import Header from './Header.jsx'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
          display: 'All',
          tiles:[]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
  
  componentWillMount(){
    if(!this.props.user.id){
      this.props.getUser()
      .then(() => {
        axios.get(`/api/dashboard/${this.state.display}`)
        .then(response => {
          this.setState({
            tiles: response.data,
          })
        })
        .catch(err => {
          console.error(err);
        })
      })
      .catch(err => {
        console.error(err);
        this.props.history.push('/');
      })
    }
  }
  render() {
    let tiles = ''
    if(this.state.tiles.length > 0){
      debugger
    tiles = this.state.tiles.map(tiles => {
      return(
      <div className = 'tile'>
        <h1 className = 'tileTitle'>{tiles.title}</h1>
        <a ref={tiles.ref}>
          <button className = 'viewButton'>View</button>
        </a>
      </div>)
    })}else{
      return(
        <div className="loading">
        Loading
      </div>)
    }
    return (
      <div className="Dashboard">
        <Header/>
        {/* {tiles} */}
      </div>
    );
  }
}

export default connect((state) => state, Actions)(Dashboard);