import React, { useState } from 'react';
import Graph from '../../components/Graph/view';


function Asteroids({ data }) {
  const { count, asteroids } = data;

  let danger;
  if (asteroids) {
    danger = (asteroids.filter(asteroid => asteroid.is_potentially_hazardous_asteroid === true).length );
  }

  return (
    <section>
      <h3>
      On this date {count} asteroids have approached the Earth's atmosphere
        terrestre{' '}
      </h3>
      <h3>
        {danger ? `${danger} of which are potentially dangerous` : ''}
      </h3>

      <Graph data={data}/>
    </section>
  );
}
export default Asteroids;
