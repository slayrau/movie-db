import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useUrlParams } from 'src/hooks';
import { TvGenres, MediaType, SortTypes } from 'src/utils/const';

import DiscoverSelector from 'src/redux/selectors/discover';
import DiscoverOperation from 'src/redux/operations/discover';
import DiscoverActionCreator from 'src/redux/actions/discover';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import CardSkeleton from 'src/components/card-skeleton';
import LoadMoreButton from 'src/components/load-more-button';
import Select from 'src/components/select';

import './style.scss';

const TvPage = () => {
  const data = useSelector(DiscoverSelector.data);
  const loading = useSelector(DiscoverSelector.loading);
  const totalPages = useSelector(DiscoverSelector.totalPages);
  const currentPage = useSelector(DiscoverSelector.page);
  const dispatch = useDispatch();

  const {
    genre,
    sort,
    handleGenreClick,
    handleSortClick,
  } = useUrlParams();

  const mediaType = MediaType.tv;

  const handleLoadMore = () => {
    dispatch(DiscoverOperation.loadMoreDiscover({ mediaType, genre, sort }));
  };

  useEffect(() => {
    dispatch(DiscoverOperation.getDiscover({ mediaType, genre, sort }));
  }, [dispatch, mediaType, genre, sort]);

  useEffect(() => {
    return () => {
      dispatch(DiscoverActionCreator.resetResults());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page className="discover-page">
      <div className="discover-page__content container">
        <div className="discover-page__row">
          <Select
            title="Жанры"
            data={TvGenres}
            selectedId={genre}
            onSelectClick={handleGenreClick}
          />

          <Select
            title="Сортировка"
            data={SortTypes}
            selectedId={sort}
            onSelectClick={handleSortClick}
            column
            right
          />
        </div>

        <CardGrid>
          {(loading && !data.length)
            ? (
              new Array(20).fill(0).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            ) : (
              data.map((it) => (
                <Card
                  key={it.id}
                  id={it.id}
                  mediaType={mediaType}
                  title={it.title || it.name}
                  posterPath={it.poster_path}
                  releaseDate={it.release_date || it.first_air_date}
                  voteAverage={it.vote_average}
                />
              ))
            )}
        </CardGrid>

        {(currentPage < totalPages) && (
          <LoadMoreButton
            onLoadMoreClick={handleLoadMore}
            disabled={loading}
          />
        )}
      </div>
    </Page>
  );
};

export default TvPage;
