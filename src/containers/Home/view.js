
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

    //States
    const [date, setDate] = useState(''); 
    const [cacheCuriosity, setCacheCuriosity] = useState({})
    const [cacheAsteroids, setCacheAsteroids] = useState([{}])
    const [cacheImagetoday, setCacheImagetoday] = useState({})
    
    let today = new Date();
    


    useEffect(() => {   //para que actualice a fecha de hoy al montar el componente
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
  
      today = yyyy + '-' + mm + '-' + dd;
      setDate(today); 
    }, []);
    

    return <>

    <section className="Home__title">
      <h1>Welcome to my application on React about NASA images</h1>
    </section>
    <section className="Home__link">
    < Link to='/imagetoday'> <div className="Home__link__div"> <img src={todayFront} alt='Space Today' /> <h3>Image Today</h3> </div> </ Link>
    < Link to='/curiosity'> <div className="Home__link__div">  <img src={curiosityFront} alt='Curiosity' /><h3>Rovers Curiosity</h3> </div></ Link>
    < Link to='/asteroid'> <div className="Home__link__div"><img src={asteroidFront} alt='Asteroid' /> <h3>Asteroids</h3> </div></ Link>
    </section>
   
      <Switch>
        <Route exact path="/imagetoday" render={(props) => <ImagenToday {...props} today={today} date={date} setDate={setDate} cacheImagetoday={cacheImagetoday} setCacheImagetoday={setCacheImagetoday} />} />
        <Route exact path="/curiosity" render={(props) => <Curiosity {...props} cacheCuriosity={cacheCuriosity} setCacheCuriosity={setCacheCuriosity} />} />
        <Route exact path="/asteroid" render={(props) => <Asteroid {...props} date={date} setDate={setDate} cacheAsteroids={cacheAsteroids} setCacheAsteroids={setCacheAsteroids} />}  />
      </Switch>
    
    </>
}



export default Home;