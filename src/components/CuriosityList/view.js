import React from 'react';
import CuriosityCard from '../CuriosityCard/view';
import "./styles.scss";


function CuriosityList({data}){

console.log(data)

//const { /*id,*/ img, camera, sol } = data;

if (data[0]){
return <>
<h2>Imágenes tomadas por el Rovers Curiosity en el sol {data[0].sol}</h2>
    <ul className="CuriosityList__list">
        {data.map(card => (
            <CuriosityCard key={card.id} {...card}></CuriosityCard>
        ))}
    </ul>
    </>
}
return <h2 className="CuriosityException__message">The Rovers Curiosity landed on Mars on 2012-08-06. <br/> He died on 09-28-2019 because of a sandstorm. <br/> Not every day photos were taken.</h2>
}



export default CuriosityList;