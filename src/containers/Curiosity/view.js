import React, { useState } from 'react';

import {getImageByDate} from '../../services/curiosityApi'; 
import FetchDate from '../../components/FetchDate';
import CuriosityCard from '../../components/CuriosityCard/view';


//getImageByDate('2019-01-01')

function Curiosity(){
   const [data, setData] = useState({})
   const [date, setDate] = useState('2019-01-01');  


   async function fetchCuriosityData() {
    const data = await getImageByDate(date);
    setData(data);
}


    //<FetchDate fetchImg={fetchCuriosityData} date={date} setDate={setDate} ></FetchDate>
    return <> 
    <h2>Soy el contenedor Curiosity</h2>
    <h3>Importo componentes:</h3>
    <FetchDate fetchImg={fetchCuriosityData} date={date} setDate={setDate} ></FetchDate>
    <CuriosityCard data={data}></CuriosityCard>
    </>
}

export default Curiosity;