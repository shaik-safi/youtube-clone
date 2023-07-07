import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '88ccc700a0msh7645a32ced3f03dp19205ejsn43d745858f92',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}