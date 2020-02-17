import React from 'react';
import './styles.scss';

import galaxia from '../../assets/images/galaxia.svg'


function CuriosityCard({ img, camera }) {
  return (
    <>
      <li className="CuriosityCard__card">
        <h4>Cámera {camera}</h4>
        <div className="CuriosityCard__img">
          {img?<img src={img} alt={camera} />:
         <div  className="CuriosityCard__loading" > <img src={galaxia} alt='Loading' /></div>}
        </div>
      </li>
    </>
  );
}
export default CuriosityCard;
