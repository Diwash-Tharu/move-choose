
import axios from 'axios';
import { ENC_VARS } from '../config/envVars.js';



  


export const fetcchFromTMDB = async (url) => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer'+ ENC_VARS.TMDB_API_KEY
        }
      };

    const response=  await axios.get(url, options)
    return response.data;
};