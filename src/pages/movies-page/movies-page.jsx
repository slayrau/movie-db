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
            media_type={movie.media_type}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            adult={movie.adult}
          />
        ))}
      </CardGrid>
    </Page>
  );
};

export default MoviesPage;
