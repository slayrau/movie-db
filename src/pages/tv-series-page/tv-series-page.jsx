import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Selector from 'src/redux/selectors/tv-series';
import Operation from 'src/redux/operations/tv-series';
import ActionCreator from 'src/redux/actions/tv-series';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import PageSpinner from 'src/components/page-spinner';
import './style.scss';

const TvSeriesPage = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector(Selector.selectTvSeries);

  useEffect(() => {
    dispatch(Operation.getTvSeries());

    return () => {
      dispatch(ActionCreator.resetTvSeries());
    };
  }, [dispatch]);

  return (
    <Page>
      {tvSeries.loading
        ? (
          <PageSpinner size="large" />
        ) : (
          <CardGrid>
            {tvSeries.data.map((series) => (
              <Card
                key={series.id}
                id={series.id}
                mediaType={series.media_type}
                title={series.name}
                posterPath={series.poster_path}
              />
            ))}
          </CardGrid>
        )}
    </Page>
  );
};

export default TvSeriesPage;
