import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TvGenres, MediaTypes } from 'src/utils/const';

import GenreSelector from 'src/redux/selectors/genre';
import SortSelector from 'src/redux/selectors/sort';
import TvSeriesSelector from 'src/redux/selectors/tv-series';
import Operation from 'src/redux/operations/tv-series';
import ActionCreator from 'src/redux/actions/tv-series';

import Genres from 'src/modules/genres';
import Sort from 'src/modules/sort';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import PageSpinner from 'src/components/page-spinner';
import './style.scss';

const TvSeriesPage = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector(TvSeriesSelector.tvSeries);
  const currentGenreId = useSelector(GenreSelector.genreId);
  const currentSortId = useSelector(SortSelector.sortId);
  const currentMediaType = MediaTypes.tv.id;

  useEffect(() => {
    dispatch(Operation.getTvSeries({
      mediaType: currentMediaType,
      genre: currentGenreId,
      sort: currentSortId,
    }));

    return () => {
      dispatch(ActionCreator.resetTvSeries());
    };
  }, [
    dispatch,
    currentGenreId,
    currentSortId,
    currentMediaType,
  ]);

  return (
    <Page
      subHeader={(
        <>
          <Genres
            genres={TvGenres}
          />

          <Sort />
        </>
      )}
    >
      {tvSeries.loading
        ? (
          <PageSpinner size="large" />
        ) : (
          <CardGrid>
            {tvSeries.data.map((series) => (
              <Card
                key={series.id}
                id={series.id}
                mediaType={currentMediaType}
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
