import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MediaTypes, MovieGenres } from 'src/utils/const';

import Selector from 'src/redux/selectors/movies';
import GenreSelector from 'src/redux/selectors/genre';
import Operation from 'src/redux/operations/movies';
import ActionCreator from 'src/redux/actions/movies';

import Genres from 'src/modules/genres';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import PageSpinner from 'src/components/page-spinner';
import './style.scss';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(Selector.movies);
  const currentGenreId = useSelector(GenreSelector.genreId);
  const currentMediaType = MediaTypes.movie.id;

  useEffect(() => {
    dispatch(Operation.getMovies({
      mediaType: currentMediaType,
      genre: currentGenreId,
    }));

    return () => {
      dispatch(ActionCreator.resetMovies());
    };
  }, [dispatch, currentMediaType, currentGenreId]);

  return (
    <Page
      subHeader={(
        <Genres
          genres={MovieGenres}
        />
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
