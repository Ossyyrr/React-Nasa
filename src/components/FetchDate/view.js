import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';

function FetchDate({ date, setDate, fetch }) {


  useEffect(() => { //los datos se tienen q recoger en el componente principal
    fetch();
  }, [date]);



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
      <p>
        voy a importar un componente dentro de fetchDate (más tarde haré un
        router en este componente para diferenciar entre sus componentes hijos)
      </p>
    </>
  );
}

export default FetchDate;
