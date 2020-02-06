import React from 'react';

function CuriosityCard({data}){

console.log(data)

const { /*id,*/ img, camera, sol } = data;

return <><h2>Soy el componente CuriosityCard</h2>
<h2>Imagen del curiosity en el sol {sol} tomada con la cámara {camera}</h2>
<img src={img} ></img>


    </>
}
export default CuriosityCard;