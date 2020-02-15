import React, { useState } from 'react';
import {getImageByDate} from '../../services/imageTodayApi'; 
import "./styles.scss";

import FetchDate from '../../components/FetchDate';
import ImageCard from '../../components/ImageCard';

function ImagenToday ({date, setDate, cacheImagetoday, setCacheImagetoday}){
    const [data, setData] = useState({})

/*
    async function fetchImagentodayData() {
        const data = await getImageByDate(date);
        setData(data);
        console.log(data)
    }*/


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
 


   //fetch será, para cada contenedor, la función que buscará en cada api!!!
   
    return(
        <>
        <section>
     
 

        <FetchDate fetchImg={fetchImagentodayData} date={date} setDate={setDate} ></FetchDate>
        <div className="ImageCard__card">
        <ImageCard  data={data}></ImageCard>
        </div>
        </section>
        </>
    )
}

export default ImagenToday;