import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'api';
import Page from 'components/page';
import Collection from 'components/collection';
import CardSkeleton from 'components/card-skeleton';
import Card from 'components/card';
import './style.scss';

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getTrendingMovies();

      setCards(response.data.results);
      setLoading(false);
    })();
  }, []);

  return (
    <Page>
      <Collection title="Топ фильмов">
        {loading
          ? (
            new Array(20).fill(0).map((_, i) => <CardSkeleton key={i} />)
          ) : (
            cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                mediaType={card.media_type}
                title={card.title || card.name}
                posterPath={card.poster_path}
              />
            ))
          )}
      </Collection>
      <Collection title="Топ фильмов">
        {loading
          ? (
            new Array(20).fill(0).map((_, i) => <CardSkeleton key={i} />)
          ) : (
            cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                mediaType={card.media_type}
                title={card.title || card.name}
                posterPath={card.poster_path}
              />
            ))
          )}
      </Collection>
      <Collection title="Топ фильмов">
        {loading
          ? (
            new Array(20).fill(0).map((_, i) => <CardSkeleton key={i} />)
          ) : (
            cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                mediaType={card.media_type}
                title={card.title || card.name}
                posterPath={card.poster_path}
              />
            ))
          )}
      </Collection>
      <Collection title="Топ фильмов">
        {loading
          ? (
            new Array(20).fill(0).map((_, i) => <CardSkeleton key={i} />)
          ) : (
            cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                mediaType={card.media_type}
                title={card.title || card.name}
                posterPath={card.poster_path}
              />
            ))
          )}
      </Collection>
    </Page>
  );
};

export default HomePage;
