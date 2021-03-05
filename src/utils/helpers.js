/**
 *
 * @param {('w92' | 'w154' | 'w185' | 'w300' | 'w780' | 'original')} size - List of available poster sizes
 * @param {string} posterPath - Poster path
 */
export const getPosterUrl = (size, posterPath) => (
  `https://image.tmdb.org/t/p/${size}/${posterPath}`
);

export const getReleaseYear = (releaseDate) => (
  new Date(releaseDate).getFullYear()
);
