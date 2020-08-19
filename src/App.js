import React, { Component } from 'react';
import './App.css';
import Login from './Component/Login';
import {Route } from 'react-router-dom';
import Register from './Component/Register';
 
 
class App extends Component {
  render() {
    return (       
        <div>
          <Login />
          <div>
            <Route path="/Register.jsx" exact component={Register} />
          </div>
        </div> 
   
    );
  }
}
 
export default App;

 
