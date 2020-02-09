import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './containers/Home';


function App() {
  return (
  <Router>
    <nav>poner links a space today y curiosity fixed y pequeñitos</nav>
    <Switch>
      <Route path="/" component={Home} />


      
    </Switch>
  </Router>
  );
}

export default App;
