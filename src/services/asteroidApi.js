import axios from 'axios';


const URL =`https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.REACT_APP_API_KEY}`;


function formatData(data ,date) {
const {element_count} = data;
const asteroids = data.near_earth_objects[date];


return {
  count: element_count,
  asteroids
};
}

  export async function getImageByDate(date) {
    try{

      const { data } = await axios.get(`${URL}&start_date=${date}&end_date=${date}`);
      return (formatData(data,date))
    }catch(e){
      console.log(e.message);
    }
  }

  