import axios from 'axios';
//require('dotenv').config();    

//@TODO pasar API_KEY a .env
const API_KEY = '94ftHHW76UIZyPMSQOH1p8SBgiUR63RKChpT80rv';


const URL =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&hd=true`;

function formatData(data) {

  const { date, title, explanation, url, hdurl } = data;

  return {
    dateImg : date,
    title,
    explanation,
    url,
    hdurl
  };
}

  export async function getImageByDate(date) {
    const { data } = await axios.get(`${URL}&date=${date}`);
    return formatData(data);
  }