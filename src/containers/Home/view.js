import React, { useState, useEffect } from 'react';

import ImagenToday from "../ImagenToday";

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
    <p>Hay que poner el link a curiosity en el boton dentro de home</p>
    <ImagenToday date={date} setDate={setDate}></ImagenToday>
    
    </>
}



export default Home;