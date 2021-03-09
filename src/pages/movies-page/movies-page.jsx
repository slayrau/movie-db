import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getTrendingMovies } from 'src/api';
import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
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
