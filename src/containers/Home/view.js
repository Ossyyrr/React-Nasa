import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
   Link,
} from "react-router-dom";
import "./styles.scss";

import ImagenToday from "../ImagenToday";
import Curiosity from '../Curiosity/view';
import todayFront from '../../assets/images/today.png'
import curiosityFront from '../../assets/images/curiosity.PNG'

function Home(){

    const [date, setDate] = useState('');  

    useEffect(() => {   //para que actualice a fecha de hoy al montar el componente
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
  
      today = yyyy + '-' + mm + '-' + dd;
      setDate(today); //@TODO tiene una fecha minima sin datos y fecha maxima de hoy
    }, []);
    

    return <><h1>HOME</h1>
    <section className="Home__title">
      <h1>Welcome to my application on React about NASA images</h1>
    </section>
    <section className="Home__link">
    < Link to='/imagetoday'> <img src={todayFront} alt='Space Today' />  </ Link>
    < Link to='/curiosity'> <img src={curiosityFront} alt='Curiosity' />  </ Link>
    </section>
    <Router>
      <Switch>
        <Route exact path="/imagetoday" render={(props) => <ImagenToday {...props} date={date} setDate={setDate} />} />
        <Route exact path="/curiosity" component={Curiosity} />
      </Switch>
    </Router>
    </>
}



export default Home;