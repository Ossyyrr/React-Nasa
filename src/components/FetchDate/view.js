import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';

function FetchDate({ date, setDate, fetchImg }) {


  useEffect(() => { //los datos se tienen q recoger en el componente principal
    fetchImg();
  }, [date]); //fetchImg para que no salga el warning



  function handleOnChange(e) {
    setDate(e.target.value);
  }



  return (
    <>
      <h2>Soy el componente FetchDate</h2>
      <input type="date" value={date} onChange={handleOnChange}></input>
      <p>date: {date}</p>
   
    </>
  );
}

export default FetchDate;
