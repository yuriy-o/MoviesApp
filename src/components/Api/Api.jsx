import axios from 'axios';
import { useEffect } from 'react';

export const GetTrendMovie = () => {
  useEffect(() => {
    async function StartData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=6d6b9e41fec19e9680f9b1c469332fae`
        );
        console.log('array', response.data.results);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }

    StartData();
    console.log('Promise', StartData());
  }, []);
};
