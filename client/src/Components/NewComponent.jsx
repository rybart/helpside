import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Header from './Header.jsx';

class NewComponent extends Component {
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
      <div className="NewComponent">
        <Header/>
        <div className="fields">
          <form className="newTile">
            <input type="text" className="title"/>
            <input type="text" className="img"/>
            <input type="radio" name ='type' className="ref"/>
            <input type="radio" name ='type' className="pdf"/>
            <input type="radio" name ='type' className="video"/>
            <input type="text" className="info"/>
            <input type="text" className="notes"/>
            <input type="text" className="tags"/>
            <input type="submit" className="save"/>
          </form>
        </div>
      </div>
    );
  };

}

export default NewComponent;