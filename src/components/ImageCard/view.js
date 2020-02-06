import React from 'react';
//import PropTypes from 'prop-types';



function ImageCard({data}){
const {dateImg, title, explanation, url, hdurl} = data;   //@TODO   Boton bajo la imagen para imagen en HD (hdurl)


console.log(title)


    return <>
    <h2>Soy el componente ImageCard:</h2>
    <h2>{title}</h2>
    <img src={url}></img>
    <p>{explanation}</p>

    </> 
}


export default ImageCard;