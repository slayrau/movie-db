import { useEffect, useState } from 'react';

import { getTrendingTvSeries } from 'api';
import Page from 'components/page';
import CardGrid from 'components/card-grid';
import Card from 'components/card';
import './style.scss';

const TvSeriesPage = () => {
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getTrendingTvSeries();

      setTvSeries(response.data.results);
    })();
  }, []);

  return (
    <Page>
      <CardGrid>
        {tvSeries.map((series) => (
          <Card
            key={series.id}
            id={series.id}
            media_type={series.media_type}
            title={series.name}
            poster_path={series.poster_path}
            release_date={series.first_air_date}
          />
        ))}
      </CardGrid>
    </Page>
  );
};

export default TvSeriesPage;