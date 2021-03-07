import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'api';
import Page from 'components/page';
import CardGrid from 'components/card-grid';
import Card from 'components/card';
import './style.scss';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getTrendingMovies();

      setMovies(response.data.results);
    })();
  }, []);

  return (
    <Page>
      <CardGrid>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            mediaType={movie.media_type}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </CardGrid>
    </Page>
  );
};

export default MoviesPage;
