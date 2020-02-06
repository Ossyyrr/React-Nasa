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
    <h2>TITULO EJEMPLO en app.js  (hacer boton para cambiar de links -> imagenToday a Curiosity)</h2>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
