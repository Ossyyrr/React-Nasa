import React from 'react';
import PropTypes from 'prop-types';


function FetchDate({date, setDate}) {
  
  
  /*const [date, setDate] = useState('');  //tiene una fecha minima sin datos y fecha maxima de hoy

  useEffect(() => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    setDate(today);
  }, []);*/

  console.log(date);
 
  
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
