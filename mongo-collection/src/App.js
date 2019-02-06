import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import CarDetails from './components/CarDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation /> 
      </div>
    );
  }
}

export default App;
