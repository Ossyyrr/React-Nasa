import React from 'react';
import CuriosityCard from '../CuriosityCard/view';
import "./styles.scss";


function CuriosityList({data, cache}){

console.log(data)
console.log('cache:')
console.log(cache)




//const { /*id,*/ img, camera, sol } = data;

if (data[0]){
return <>
<h2>Images taken by the Rovers Curiosity in the sun {data[0].sol}</h2>
<p>A sun is every day on Mars (a return of Mars on its own axis. The suns are counted since the Rovers landed</p>
    <ul className="CuriosityList__list">
        {data.map(card => (
            <CuriosityCard key={card.id} {...card}></CuriosityCard>
        ))}
    </ul>
    </>
}
return <h2 className="CuriosityException__message">The Rovers Curiosity landed on Mars on 06-08-2012. <br/> He died on 09-28-2019 because of a sandstorm. <br/> Not every day photos were taken.</h2>
}



export default CuriosityList;