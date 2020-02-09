import React from 'react';
import CuriosityCard from '../CuriosityCard/view';

function CuriosityList({data}){

console.log(data)

//const { /*id,*/ img, camera, sol } = data;

if (data[0]){
return <>
<h2>Soy el componente CuriosityList</h2>
    <h3>Imágenes tomadas en el sol {data[0].sol}</h3>
    <ul>
        {data.map(card => (
            <CuriosityCard key={card.id} {...card}></CuriosityCard>
        ))}
    </ul>
    </>
}
return <h2>El curiosití aterrizó el día 2012-08-06, comenzó a tomar fotos el día 2012-08-07 y murió el 2019-09-28</h2>
}



export default CuriosityList;