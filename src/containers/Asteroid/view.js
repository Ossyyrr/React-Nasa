import React, { useState } from 'react';
import FetchDate from '../../components/FetchDate';
import Asteroids from '../../components/Asteroids';
import {getImageByDate} from '../../services/asteroidApi';

function Asteroid({date, setDate, cacheAsteroids, setCacheAsteroids}){
    const [data, setData] = useState({})

    /*async function fetchAsteroidData() {
        const data = await getImageByDate(date);
        setData(data);
        console.log(data)
    }*/

   async function fetchAsteroidData() {

       if(cacheAsteroids[date]){  
       console.log('cojo datos del cache')
       console.log(cacheAsteroids[date])
       setData(cacheAsteroids[date])
       
       }else{
        let data = await getImageByDate(date);
        setData(data);
    
        let  cacheData = {...cacheAsteroids, [date]:data}
    
        setCacheAsteroids(cacheData)
        console.log(data)
       }
}

 
    return<> 
    <FetchDate fetchImg={fetchAsteroidData} date={date} setDate={setDate} ></FetchDate>
    {data?  <Asteroids data={data}></Asteroids> : <h2>No data this day</h2>}
    </>
}

export default Asteroid;