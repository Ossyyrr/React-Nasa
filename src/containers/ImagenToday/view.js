import React, { useState } from 'react';
import {getImageByDate} from '../../services/imageTodayApi'; 
import "./styles.scss";

import FetchDate from '../../components/FetchDate';
import ImageCard from '../../components/ImageCard';

function ImagenToday ({date, setDate, cacheImagetoday, setCacheImagetoday, today}){
    const [data, setData] = useState({})

    /*
    async function fetchImagentodayData() {
        const data = await getImageByDate(date);
        setData(data);
        console.log(data)
    }*/

    let dateIsValid = true;
    if (date>today){
        dateIsValid= false;
    }

    async function fetchImagentodayData() {

        if(cacheImagetoday[date]){  
        console.log('cojo datos del cache')
        console.log(cacheImagetoday[date])
        setData(cacheImagetoday[date])
        
        }else{
         let data = await getImageByDate(date);
         setData(data);
     
         let  cacheData = {...cacheImagetoday, [date]:data}
     
         setCacheImagetoday(cacheData)
         console.log(cacheData)
        }
 }
   
    return(
        <> 
            <FetchDate fetchImg={fetchImagentodayData} date={date} setDate={setDate} ></FetchDate>
            {dateIsValid? 
            <section className="ImagenToday__container">
                
                    <ImageCard  data={data}></ImageCard>
              
            </section> 
            : <h2> The image of the day can only be displayed until {today} </h2>}
        </>
    )
}

export default ImagenToday;