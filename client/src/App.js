import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Components/Login.jsx';
import Dashboard from './Components/Dashboard';
import NewComponent from './Components/NewComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/dashboard' component={Dashboard}/>          
            <Route path = '/newcomponent' component={NewComponent}/>
            <Route path='/' component= {Login}/>
          </Switch>
        </Router>
        

      </div>
    );
  }
}

export default App;
