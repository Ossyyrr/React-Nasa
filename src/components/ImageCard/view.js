import React from 'react';
import './styles.scss';

function ImageCard({ data }) {
  const { /*dateImg,*/ title, explanation, url /*hdurl*/ } = data; //@TODO   Boton bajo la imagen para imagen en HD (hdurl)

  return <>
    {data.title?
    <div className="ImageCard__container">
      <h2>{title}</h2>
      <div className="ImageCard__img">
        <img src={url} alt={title}></img>
      </div>
      <div className="ImageCard__description">
        <p>{explanation}</p>
      </div>
    </div>: <h2>No data</h2>}</>
  ;
}

export default ImageCard;
