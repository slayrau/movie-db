import axios from 'axios';

import { API_KEY, LANG } from 'src/utils/const';

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

const getDiscover = ({ mediaType, genre, sort, page }) => (
  instance.get(`/discover/${mediaType}?api_key=${API_KEY}&with_genres=${genre}&sort_by=${sort}&page=${page}&language=${LANG}`)
);

export {
  getTrendingMovies,
  getTrendingTvSeries,
  getMediaDetails,
  getDiscover,
};
