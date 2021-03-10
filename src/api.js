import axios from 'axios';

import { API_KEY, LANG, ALL_GENRES } from 'src/utils/const';

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

const getDiscover = ({ mediaType, genre, sort }) => {
  const formatedGenre = genre !== ALL_GENRES ? `&with_genres=${genre}` : '';

  return (
    instance.get(`/discover/${mediaType}?api_key=${API_KEY}${formatedGenre}&sort_by=${sort}&language=${LANG}`)
  );
};

export {
  getTrendingMovies,
  getTrendingTvSeries,
  getMediaDetails,
  getDiscover,
};
