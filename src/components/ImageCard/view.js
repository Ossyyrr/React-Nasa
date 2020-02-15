import React from 'react';
import "./styles.scss";


function ImageCard({data}){
const {/*dateImg,*/ title, explanation, url, /*hdurl*/} = data;   //@TODO   Boton bajo la imagen para imagen en HD (hdurl)

    return <div className="ImageCard__container">
    <h2>{title}</h2>
    <img src={url} alt={title}></img>
    <div className="ImageCard__description">
    <p>{explanation}</p>
    </div>
    </div>
}


export default ImageCard;