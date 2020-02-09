import React, { useState } from 'react';
import {getImageByDate} from '../../services/imagenTodayApi'; 
import "./styles.scss";

import FetchDate from '../../components/FetchDate';
import ImageCard from '../../components/ImageCard';

function ImagenToday ({date, setDate}){
    const [data, setData] = useState({})


    async function fetchImagentodayData() {
        const data = await getImageByDate(date);
        setData(data);
    }


   //fetch será, para cada contenedor, la función que buscará en cada api!!!
   
    return(
        <>
        <section>
        <h2>Soy el contenedor ImagenToday</h2>
 
        <p>quizas añadir cajón de comentarios que se almacenen en un array y se muestren debajo</p>

        <FetchDate fetchImg={fetchImagentodayData} date={date} setDate={setDate} ></FetchDate>
        <div className="ImageCard__card">
        <ImageCard  data={data}></ImageCard>
        </div>
        </section>
        </>
    )
}

export default ImagenToday;