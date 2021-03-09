import axios from 'axios';

const API_KEY = '5577d8a8618d670cc3c09fae3bea270f';
const LANG = 'ru-RU';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const getTrendingMovies = () => (
  instance.get(`/trending/movie/day?api_key=${API_KEY}&language=${LANG}`)
);

const getTrendingTvSeries = () => (
  instance.get(`/trending/tv/day?api_key=${API_KEY}&language=${LANG}`)
);

const getMediaDetails = ({ mediaType, id }) => (
  instance.get(`/${mediaType}/${id}?api_key=${API_KEY}&append_to_response=credits,similar,content_ratings,videos&language=${LANG}`)
);

export {
  getTrendingMovies,
  getTrendingTvSeries,
  getMediaDetails,
};
