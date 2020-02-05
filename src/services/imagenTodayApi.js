import axios from 'axios';
//require('dotenv').config();

const API_KEY = '94ftHHW76UIZyPMSQOH1p8SBgiUR63RKChpT80rv';
let date = '2020-02-01';  //@TODO conectar con componente fecha
const URL =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}&hd=true`;

function formatData(data) {

  const { date, title, explanation, url, hdurl } = data;

  return {
    date,
    title,
    explanation,
    url,
    hdurl
  };
}

export async function getImageToday() {

  const { data } = await axios.get(URL);
  console.log(formatData(data));
  return formatData(data);
}
