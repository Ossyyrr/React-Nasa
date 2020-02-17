import React from 'react';
import './styles.scss';
import { Bar } from 'react-chartjs-2';

function Graph({ data, date }) {
  console.log(data.count);
  console.log(date);


console.log('rerender Graph')

  //Bar graph
  let max = [];
  let min = [];
  let name = [];
  let isDanger = [];
  let colorsMax = [];
  let colorsMin = [];

  function formatData(data) {
    if (data.asteroids) {
      const { asteroids } = data;
      max = asteroids.map(
        el => el.estimated_diameter.kilometers.estimated_diameter_max
      );

      min = asteroids.map(
        el => el.estimated_diameter.kilometers.estimated_diameter_min
      );

      name = asteroids.map(el => el.name);

      isDanger = asteroids.map(el => el.is_potentially_hazardous_asteroid);

      isDanger.forEach(e => {
        e ? colorsMax.push('#D22730') : colorsMax.push('#96CDFF');
        e ? colorsMin.push('#FE5F55') : colorsMin.push('#D8E1FF');
      });
    }
  }

  formatData(data);

  const diameter = {
    data: {
      labels: name,
      datasets: [
        {
          label: 'maximum diameter (km)',
          backgroundColor: colorsMax,

          data: max,
        },
        {
          label: 'Minimum diameter (km)',
          backgroundColor: colorsMin,
          data: min,
        },
        {
          label: '(potentially hazardous)',
          backgroundColor: '#D22730',
          data: [0],
        },
      ],
    },
  };

  return (
    <div className="Graph__container">
      <h2>
        Maximum and minimum size in km of each of the asteroids for the given
        date
      </h2>
      <Bar className="Graph__bar" data={diameter.data} />
    </div>
  );
}

export default  React.memo(Graph) ;
