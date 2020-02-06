import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
   Link,
} from "react-router-dom";
import ImagenToday from "../ImagenToday";
import Curiosity from '../Curiosity/view';

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
    
   /* <ImagenToday date={date} setDate={setDate}></ImagenToday>
    <Curiosity date={date} setDate={setDate}></Curiosity>*/
//@TODO Hay que poner un router en este return
    return <><h1>HOME</h1>
    < Link to='/imagetoday'>Imagetoday  </ Link>
    < Link to='/curiosity'>  Curiosity</ Link>
    <p>Hay que poner el link a curiosity en el boton dentro de home</p>

    <Router>
      <Switch>
        <Route exact path="/imagetoday" render={(props) => <ImagenToday {...props} date={date} setDate={setDate} />} />
        <Route exact path="/curiosity" component={Curiosity} />
      </Switch>
    </Router>
    </>
}



export default Home;