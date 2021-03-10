import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MediaTypes, MovieGenres } from 'src/utils/const';

import MoviesSelector from 'src/redux/selectors/movies';
import GenreSelector from 'src/redux/selectors/genre';
import SortSelector from 'src/redux/selectors/sort';
import Operation from 'src/redux/operations/movies';
import ActionCreator from 'src/redux/actions/movies';

import Genres from 'src/modules/genres';
import Sort from 'src/modules/sort';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import PageSpinner from 'src/components/page-spinner';
import './style.scss';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(MoviesSelector.movies);
  const currentGenreId = useSelector(GenreSelector.genreId);
  const currentSortId = useSelector(SortSelector.sortId);
  const currentMediaType = MediaTypes.movie.id;

  useEffect(() => {
    dispatch(Operation.getMovies({
      mediaType: currentMediaType,
      genre: currentGenreId,
      sort: currentSortId,
    }));

    return () => {
      dispatch(ActionCreator.resetMovies());
    };
  }, [
    dispatch,
    currentMediaType,
    currentGenreId,
    currentSortId,
  ]);

  return (
    <Page
      subHeader={(
        <>
          <Genres
            genres={MovieGenres}
          />

          <Sort />
        </>
      )}
    >
      {movies.loading
        ? (
          <PageSpinner size="large" />
        ) : (
          <>
            <CardGrid>
              {movies.data.map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  mediaType={currentMediaType}
                  title={movie.title}
                  posterPath={movie.poster_path}
                />
              ))}
            </CardGrid>
          </>
        )}
    </Page>
  );
};

export default MoviesPage;
