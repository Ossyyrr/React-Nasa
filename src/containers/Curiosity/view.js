import React, { useState } from 'react';

import {getImageByDate} from '../../services/curiosityApi'; 
import FetchDate from '../../components/FetchDate';
import CuriosityList from '../../components/CuriosityList/view';


//getImageByDate('2019-01-01')

function Curiosity(){
   const [data, setData] = useState([{}])
   const [date, setDate] = useState('2012-08-07');  


   async function fetchCuriosityData() {
    const data = await getImageByDate(date);
    setData(data);
}


    //<FetchDate fetchImg={fetchCuriosityData} date={date} setDate={setDate} ></FetchDate>
    return <> 
    <h2>Soy el contenedor Curiosity</h2>
    <h3>Importo componentes:</h3>
    <FetchDate fetchImg={fetchCuriosityData} date={date} setDate={setDate} ></FetchDate>
    <CuriosityList data={data}></CuriosityList>
    </>
}

export default Curiosity;