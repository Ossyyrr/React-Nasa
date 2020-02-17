import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';
import './styles.scss';

function FetchDate({ date, setDate, fetchImg }) {
  useEffect(() => {
    //los datos se tienen q recoger en el componente principal
    try {
      fetchImg();
    } catch (e) {
      console.log(e);
    }
  }, [date]); //fetchImg para que no salga el warning

  function handleOnChange(e) {
    setDate(e.target.value);
  }

  return (
    <input
      className="FetchDate__container"
      type="date"
      value={date}
      onChange={handleOnChange}
    ></input>
  );
}

export default FetchDate;
