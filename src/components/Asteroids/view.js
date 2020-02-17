import React from 'react';


function Asteroids({ data, danger }) {
  const { count } = data;
  /*const { count, asteroids} = data;
  

  let danger;
  if (asteroids) {
    danger = (asteroids.filter(asteroid => asteroid.is_potentially_hazardous_asteroid === true).length );
  }*/
  console.log('rerender Asteroidssss')

  return (
    <section>
      <h3>
      On this date {count} asteroids have approached the Earth's atmosphere
  
      </h3>
      <h3>
        {danger ? `${danger} of which are potentially dangerous` : ''}
      </h3>
     
    </section>
  );
}
export default  React.memo(Asteroids);
