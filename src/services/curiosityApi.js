import axios from 'axios';


const URL =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.REACT_APP_API_KEY}`;

function formatData(data) {
  data=(data.photos.map(({id, sol, img_src, camera }) =>({id,sol, img: img_src, camera: camera.name})));
return data
}

  export async function getImageByDate(date) {
    const { data } = await axios.get(`${URL}&earth_date=${date}`);
    return formatData(data)
  }

  