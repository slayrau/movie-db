import { addMinutes } from 'date-fns';

import { ISO_3166_1 } from 'src/utils/const';

/**
 *
 * @param {('w92' | 'w154' | 'w185' | 'w300' | 'w780' | 'original')} size - List of available poster sizes
 * @param {string} posterPath - Poster path
 */
export const getPosterUrl = (size, posterPath) => (
  `https://image.tmdb.org/t/p/${size}${posterPath}`
);

/**
 *
 * @param {('w300' | 'w780' | 'w1280' | 'original')} size - List of available backdrop sizes
 * @param {string} backdropPath - Backdrop path
 */
export const getBackdropUrl = (size, backdropPath) => (
  `https://image.tmdb.org/t/p/${size}${backdropPath}`
);

/**
 *
 * @param {('w45' | 'w185' | 'h632' | 'original')} size - List of available backdrop sizes
 * @param {string} backdropPath - Backdrop path
 */
export const getProfileImg = (size, path) => (
  `https://image.tmdb.org/t/p/${size}${path}`
);

export const getReleaseYear = (releaseDate) => (
  new Date(releaseDate).getFullYear()
);

export const getUTCRuntime = (runtime) => {
  const zeroDate = new Date(0);
  const timezoneOffset = zeroDate.getTimezoneOffset();
  const runtimeInDate = addMinutes(zeroDate, runtime);
  const runtimeInDateWithFixedTimezone = addMinutes(runtimeInDate, timezoneOffset);
  return runtimeInDateWithFixedTimezone;
};
