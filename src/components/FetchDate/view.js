import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';
import {getImageByDate} from '../../services/imagenTodayApi'; 


function FetchDate({date, setDate, setData}) {
  
  
  useEffect(()=>{
    async function fetchImagentodayData() {
        const data = await getImageByDate(date);
        setData(data)
    }
    fetchImagentodayData()
},[date])


  
  function handleOnChange(e) {
    setDate(e.target.value);
  }

  return (
    <>
      <h2>Soy el componente FetchDate</h2>
      <p>
        Las peticiones se ven en consola por el momento, pero estan formateadas
        :), los datos son muy limpios
      </p>
      <input type="date" value={date} onChange={handleOnChange}></input>
      <p>date: {date}</p>
      <p>voy a importar un componente dentro de fetchDate (más tarde haré un router en este componente para diferenciar entre sus componentes hijos)</p>
     
    </>
  );
}

export default FetchDate;
