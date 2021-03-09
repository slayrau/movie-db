import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Selector from 'src/redux/selectors/movies';
import Operation from 'src/redux/operations/movies';
import ActionCreator from 'src/redux/actions/movies';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import PageSpinner from 'src/components/page-spinner';
import './style.scss';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(Selector.movies);

  useEffect(() => {
    dispatch(Operation.getMovies());

    return () => {
      dispatch(ActionCreator.resetMovies());
    };
  }, [dispatch]);

  return (
    <Page>
      {movies.loading
        ? (
          <PageSpinner size="large" />
        ) : (
          <CardGrid>
            {movies.data.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                mediaType={movie.media_type}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            ))}
          </CardGrid>
        )}
    </Page>
  );
};

export default MoviesPage;
