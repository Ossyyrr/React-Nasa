import React from 'react';

function CuriosityCard({id, sol, img, camera}){



//const { /*id,*/ img, camera, sol } = data;

return <>
    <li>
        <h4>{camera}</h4>
        <img src={img} alt={camera} />
    </li>

    </>
}
export default CuriosityCard;