import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MediaTypes, MovieGenres } from 'src/utils/const';

import GenreSelector from 'src/redux/selectors/genre';
import SortSelector from 'src/redux/selectors/sort';
import MoviesSelector from 'src/redux/selectors/movies';
import MoviesOperation from 'src/redux/operations/movies';
import MoviesActionCreator from 'src/redux/actions/movies';

import Genres from 'src/modules/genres';
import Sort from 'src/modules/sort';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import PageSpinner from 'src/components/page-spinner';
import LoadMoreButton from 'src/components/load-more-button';
import './style.scss';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(MoviesSelector.movies);
  const currentMediaType = MediaTypes.movie.id;
  const currentGenreId = useSelector(GenreSelector.genreId);
  const currentSortId = useSelector(SortSelector.sortId);

  const options = useMemo(() => ({
    mediaType: currentMediaType,
    genre: currentGenreId,
    sort: currentSortId,
  }), [currentMediaType, currentGenreId, currentSortId]);

  useEffect(() => {
    dispatch(MoviesOperation.getMovies(options));

    return () => dispatch(MoviesActionCreator.resetMovies());
  }, [dispatch, options]);

  const handleLoadMore = () => {
    dispatch(MoviesActionCreator.setLoading(true));
    dispatch(MoviesOperation.getMoreMovies(options));
  };

  return (
    <Page
      className="movie-page"
    >
      <div className="movie-page__content container">
        <div className="movie-page__row">
          <Genres
            genres={MovieGenres}
          />

          <Sort />
        </div>

        {(movies.loading && !movies.data.length)
          ? (
            <PageSpinner size="large" />
          ) : (
            <>
              <CardGrid>
                {movies.data.map((movie) => (
                  <Card
                    key={movie.id}
                    id={movie.id}
                    mediaType={options.mediaType}
                    title={movie.title}
                    posterPath={movie.poster_path}
                  />
                ))}
              </CardGrid>
            </>
          )}

        {movies.page < movies.totalPages && (
          <LoadMoreButton
            onLoadMoreClick={handleLoadMore}
            disabled={movies.loading}
          />
        )}
      </div>
    </Page>
  );
};

export default MoviesPage;
