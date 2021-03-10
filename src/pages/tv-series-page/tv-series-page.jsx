import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TvGenres, MediaTypes } from 'src/utils/const';

import GenreSelector from 'src/redux/selectors/genre';
import SortSelector from 'src/redux/selectors/sort';
import TvSeriesSelector from 'src/redux/selectors/tv-series';
import TvSeriesOperation from 'src/redux/operations/tv-series';
import TvSeriesActionCreator from 'src/redux/actions/tv-series';

import Genres from 'src/modules/genres';
import Sort from 'src/modules/sort';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import PageSpinner from 'src/components/page-spinner';
import LoadMoreButton from 'src/components/load-more-button';
import './style.scss';

const TvSeriesPage = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector(TvSeriesSelector.tvSeries);
  const currentGenreId = useSelector(GenreSelector.genreId);
  const currentSortId = useSelector(SortSelector.sortId);
  const currentMediaType = MediaTypes.tv.id;

  const options = useMemo(() => ({
    mediaType: currentMediaType,
    genre: currentGenreId,
    sort: currentSortId,
  }), [currentMediaType, currentGenreId, currentSortId]);

  useEffect(() => {
    dispatch(TvSeriesOperation.getTvSeries(options));

    return () => dispatch(TvSeriesActionCreator.resetTvSeries());
  }, [dispatch, options]);

  const handleLoadMore = () => {
    dispatch(TvSeriesActionCreator.setLoading(true));
    dispatch(TvSeriesOperation.getMoreTvSeries(options));
  };

  return (
    <Page
      className="tv-page"
    >
      <div className="tv-page__content container">
        <div className="tv-page__row">
          <Genres
            genres={TvGenres}
          />

          <Sort />
        </div>

        {(tvSeries.loading && !tvSeries.data.length)
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

        {tvSeries.page < tvSeries.totalPages && (
          <LoadMoreButton
            onLoadMoreClick={handleLoadMore}
            disabled={tvSeries.loading}
          />
        )}
      </div>
    </Page>
  );
};

export default TvSeriesPage;
