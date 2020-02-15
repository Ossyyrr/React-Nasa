import React, { useState } from 'react';

function Asteroids({ data }) {
  const { count, asteroids } = data;
  let danger;
  if (asteroids) {
    danger = asteroids.filter(asteroid => asteroid.is_potentially_hazardous_asteroid === true );
  }


  return (
    <section>
      <h3>
      On this date {count} asteroids have approached the Earth's atmosphere
        terrestre{' '}
      </h3>
      <h3>
        {danger ? `${danger.length} of which are potentially dangerous` : ''}
      </h3>
    </section>
  );
}
export default Asteroids;
