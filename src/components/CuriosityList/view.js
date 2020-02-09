import React from 'react';
import CuriosityCard from '../CuriosityCard/view';
import "./styles.scss";


function CuriosityList({data}){

console.log(data)

//const { /*id,*/ img, camera, sol } = data;

if (data[0]){
return <>
<h2>Soy el componente CuriosityList</h2>
    <h3>Imágenes tomadas en el sol {data[0].sol}</h3>
    <ul className="CuriosityList__list">
        {data.map(card => (
            <CuriosityCard key={card.id} {...card}></CuriosityCard>
        ))}
    </ul>
    </>
}
return <h2 className="CuriosityException__message">The Robers Curiosity landed on Mars on 2012-08-06. <br/> He died on 09-28-2019 because of a sandstorm. <br/> Not every day photos were taken.</h2>
}



export default CuriosityList;