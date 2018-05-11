import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class AdminView extends Component {
    constructor(props){
        super(props)
        this.state = {
          display: 'All'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

  render() {
    return (
      <div className="AdminView">
        
      </div>
    );
  }
}

export default AdminView;