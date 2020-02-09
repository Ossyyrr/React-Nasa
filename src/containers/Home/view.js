import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
   Link,
} from "react-router-dom";
import "./styles.scss";

import ImagenToday from "../ImagenToday";
import Curiosity from '../Curiosity';
import Asteroid from '../Asteroid'
import todayFront from '../../assets/images/today.png'
import curiosityFront from '../../assets/images/curiosity.PNG'
import asteroidFront from '../../assets/images/asteroid.jpg'

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
    

    return <>
    <section className="Home__title">
      <h1>Welcome to my application on React about NASA images</h1>
    </section>
    <section className="Home__link">
    < Link to='/imagetoday'> <div className="Home__link__div"> <img src={todayFront} alt='Space Today' /> <h3>Texto de prueba</h3>  <div className="Home__link__macara">sdgdsfg dsfg dsg </div>      </div> </ Link>
    < Link to='/curiosity'> <div className="Home__link__div">  <img src={curiosityFront} alt='Curiosity' /><h3>Texto de prueba</h3> </div></ Link>
    < Link to='/asteroid'> <div className="Home__link__div"><img src={asteroidFront} alt='Asteroid' /> <h3>Texto de prueba</h3> </div></ Link>
    </section>

    <Router>
      <Switch>
        <Route exact path="/imagetoday" render={(props) => <ImagenToday {...props} date={date} setDate={setDate} />} />
        <Route exact path="/curiosity" component={Curiosity} />
        <Route exact path="/asteroid" render={(props) => <Asteroid {...props} date={date} setDate={setDate} />}  />
      </Switch>
    </Router>
    </>
}



export default Home;