import axios from 'axios';

import { API_KEY, LANG } from 'src/utils/const';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const getTrending = ({ mediaType, timeWindow }) => (
  instance.get(`/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&language=${LANG}`)
);

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

const getSearch = ({ mediaType, query, page }) => (
  instance.get(`/search/${mediaType}?api_key=${API_KEY}&query=${query}&page=${page}&language=${LANG}`)
);

const getPerson = (id) => (
  instance.get(`/person/${id}?api_key=${API_KEY}&language=${LANG}&append_to_response=movie_credits,tv_credits,external_ids,images`)
);

export {
  getTrendingMovies,
  getTrendingTvSeries,
  getMediaDetails,
  getDiscover,
  getSearch,
  getTrending,
  getPerson,
};
