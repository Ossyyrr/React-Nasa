import React from "react";

import FetchDate from '../FetchDate';
import ImageCard from '../../components/ImageCard';

function ImagenToday ({date, setDate}){
    return(
        <>
        <h2>Soy el contenedor ImagenToday</h2>
        <h3>Aquí se mostrarán los componenetes de la imagen del día de la nasa</h3>
        <p>Selector de fecha que haga la petición a la api (FetchDate)</p>
        <p> la imagen junto con la descripción</p>
        <p>Un cajón de comentarios que se almacenen en un array y se muestren debajo</p>

        <h3>Importo componentes:</h3>
        <FetchDate date={date} setDate={setDate}></FetchDate>
        <ImageCard  date={date}></ImageCard>

        </>
    )
}

export default ImagenToday;