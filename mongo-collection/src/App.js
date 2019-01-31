import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateCar from './containers/CreateCar';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Cars</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/CreateCar'} className="nav-link">Add New Car</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2 className="title is-3-is-spaced">All Cars</h2> <br/>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/createCar' component={ CreateCar } /> 
          </Switch>
        </div>
     </Router>
    );
  }
}

export default App;
