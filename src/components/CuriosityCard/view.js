import React from 'react';
import "./styles.scss";

function CuriosityCard({id, sol, img, camera}){



//const { /*id,*/ img, camera, sol } = data;

return <>
    <li className="CuriosityCard__card">
        <h4>{camera}</h4>
        <img src={img} alt={camera} />
    </li>

    </>
}
export default CuriosityCard;