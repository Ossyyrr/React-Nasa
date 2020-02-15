import React from 'react';
import "./styles.scss";

function CuriosityCard({id, sol, img, camera}){


return <>
    <li className="CuriosityCard__card" >
        <h4>Cámera {camera}</h4>
        <img src={img} alt={camera} />
    </li>

    </>
}
export default CuriosityCard;