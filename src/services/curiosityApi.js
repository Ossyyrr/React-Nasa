import axios from 'axios';

//landing_date: "2012-08-06"
//max_date: "2019-09-28"
const URL =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${process.env.REACT_APP_API_KEY}`;

function formatData(data) {
return (data.photos.map(({id, sol,img_src, camera }) =>({id,sol, img: img_src, camera: camera.name})));
}



  export async function getImageByDate(date) {
    const { data } = await axios.get(`${URL}&earth_date=${date}`);
    console.log(data)
    //return formatData(data);
    return console.log(formatData(data))
  }

  