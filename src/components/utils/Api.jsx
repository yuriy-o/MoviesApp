import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '6d6b9e41fec19e9680f9b1c469332fae';

export const getTrendMovie = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getQueryMovie = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=eng`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getCreditsById = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getReviewsById = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
