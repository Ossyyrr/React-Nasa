import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ImagenToday from './containers/ImagenToday';


function App() {
  return (
  <Router>
    <h2>TITULO EJEMPLO en app.js  (hacer boton para cambiar de links -> imagenToday a Curiosity)</h2>
    <Switch>
      <Route path="/" component={ImagenToday} />
    </Switch>
  </Router>
  );
}

export default App;
