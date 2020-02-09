import React, { useState } from 'react';
import FetchDate from '../../components/FetchDate';

import {getImageByDate} from '../../services/asteroidApi';

function Asteroid({date, setDate}){
    const [data, setData] = useState({})

    async function fetchAsteroidData() {
        const data = await getImageByDate(date);
        setData(data);
    }
    
    
    return<> <h1>Soy el componente Asteroid</h1>
    <FetchDate fetchImg={fetchAsteroidData} date={date} setDate={setDate} ></FetchDate>
    </>
}

export default Asteroid;