import React, { useState } from 'react';
import FetchDate from '../../components/FetchDate';
import Asteroids from '../../components/Asteroids';
import { getImageByDate } from '../../services/asteroidApi';
import Graph from '../../components/Graph/view';
import "./styles.scss";

function Asteroid({ date, setDate, cacheAsteroids, setCacheAsteroids }) {
  const [data, setData] = useState({});

  const {  asteroids } = data;

  let danger;
  if (asteroids) {
    danger = asteroids.filter(
      asteroid => asteroid.is_potentially_hazardous_asteroid === true
    ).length;
  }

  console.log('rerender Asteroid');

  async function fetchAsteroidData() {
    if (cacheAsteroids[date]) {
      console.log('cojo datos del cache');
      console.log(cacheAsteroids[date]);
      setData(cacheAsteroids[date]);
    } else {
      let data = await getImageByDate(date);
      setData(data);

      let cacheData = { ...cacheAsteroids, [date]: data };

      setCacheAsteroids(cacheData);
      console.log(data);
    }
  }

  return (
    <section className="Asteroid__container">
      <FetchDate
        fetchImg={fetchAsteroidData}
        date={date}
        setDate={setDate}
      ></FetchDate>
      {data ? (
        <Asteroids data={data} date={date} danger={danger} />
      ) : (
        <h2>No data this day</h2>
      )}
      {asteroids ? (
        <Graph data={data} date={date} asteroids={asteroids} />
      ) : (
        <h2>No data for this date </h2>
      )}
    </section>
  );
}

export default React.memo(Asteroid);
