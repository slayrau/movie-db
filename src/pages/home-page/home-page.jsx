import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'api';
import Page from 'components/page';
import CardGrid from 'components/card-grid';
import Card from 'components/card';
import './style.scss';

const HomePage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getTrendingMovies();

      setCards(response.data.results);
    })();
  }, []);

  return (
    <Page>
      <CardGrid>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            media_type={card.media_type}
            title={card.title || card.name}
            poster_path={card.poster_path}
            release_date={card.release_date || card.first_air_date}
            adult={card.adult}
          />
        ))}
      </CardGrid>
    </Page>
  );
};

export default HomePage;
