import axios from 'axios';


const URL =`https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.REACT_APP_API_KEY}`;

function formatData(data) {
 // data=(data.photos.map(({id, sol, img_src, camera }) =>({id,sol, img: img_src, camera: camera.name})));

return data
}

  export async function getImageByDate(date) {
    const { data } = await axios.get(`${URL}&start_date=${date}&end_date=${date}`);
    let near = data.near_earth_objects;
    let dateString = date.toString();
    console.log(data)  
    
    // console.log(`${data.near_earth_objects}.${data}[0]`)
    return (data)
  }

  