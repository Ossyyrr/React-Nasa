import axios from 'axios';

const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&hd=true`;

function formatData(data) {
  const { date, title, explanation, url, hdurl } = data;

  return {
    dateImg: date,
    title,
    explanation,
    url,
    hdurl,
  };
}

export async function getImageByDate(date) {
  const { data } = await axios.get(`${URL}&date=${date}`);
  return formatData(data);
}
