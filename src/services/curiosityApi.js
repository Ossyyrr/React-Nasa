import axios from 'axios';
//require('dotenv').config();    

//@TODO pasar API_KEY a .env
const API_KEY = '94ftHHW76UIZyPMSQOH1p8SBgiUR63RKChpT80rv';

//landing_date: "2012-08-06"
const URL =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`;

function formatData(data) {
    console.log(data.photos)
return console.log(data.photos.map(({ img_src }) => img_src));
}

  export async function getImageByDate(date) {
    const { data } = await axios.get(`${URL}&earth_date=${date}`);
    formatData(data)
    //return formatData(data);
    return data
  }

  