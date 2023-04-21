import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
export class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider  value="Shreya">
        <ComponentC/>
        </UserProvider>
      </div>
    )
  }
}

export default App;
