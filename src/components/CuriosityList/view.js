import React from 'react';
import CuriosityCard from '../CuriosityCard/view';
import "./styles.scss";


function CuriosityList({data}){

if (data[0]){
return <section className="CuriosityList__container">
<h2>Images taken by the Rovers Curiosity in the sun: {data[0].sol}</h2>
<p>A sun is every day on Mars <br/>The suns are counted since the Rovers landed</p>
    <ul className="CuriosityList__list">
        {data.map(card => (
            <CuriosityCard key={card.id + 'id'} {...card} />
        ))}
    </ul>
    </section>
}
return <h2 className="CuriosityException__message">The Rovers Curiosity landed on Mars on 06-08-2012. <br/> He died on 09-28-2019 because of a sandstorm. <br/> Not every day photos were taken.</h2>
}



export default CuriosityList;