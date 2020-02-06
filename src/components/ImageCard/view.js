import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {getImageDate} from '../../services/imagenTodayApi';


function ImageCard({date}){

    console.log(getImageDate(date));
    

    return <>
    <h2>Soy el componente ImageCard</h2>
    <p>tengo que intentar coger la imagen de las props</p>
    <p>La fecha que me llega por props es {date}</p>
    </> 
}


export default ImageCard;