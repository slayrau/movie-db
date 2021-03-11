import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getDiscoverGenres } from 'src/utils/helpers';

import DiscoverSelector from 'src/redux/selectors/discover';
import DiscoverOperation from 'src/redux/operations/discover';
import DiscoverActionCreator from 'src/redux/actions/discover';
import GenreSelector from 'src/redux/selectors/genre';
import SortSelector from 'src/redux/selectors/sort';

import Genres from 'src/modules/genres';
import Sort from 'src/modules/sort';

import Page from 'src/components/page';
import CardGrid from 'src/components/card-grid';
import Card from 'src/components/card';
import CardSkeleton from 'src/components/card-skeleton';
import LoadMoreButton from 'src/components/load-more-button';
import './style.scss';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch('/:mediaType');
  const { mediaType } = match.params;

  const discover = useSelector(DiscoverSelector.discover);
  const genre = useSelector(GenreSelector.genreId);
  const sort = useSelector(SortSelector.sortId);

  useEffect(() => {
    dispatch(DiscoverOperation.getDiscover({ mediaType, genre, sort }));

    return () => dispatch(DiscoverActionCreator.resetResults());
  }, [dispatch, mediaType, genre, sort]);

  const handleLoadMore = () => {
    dispatch(DiscoverOperation.loadMoreDiscover({ mediaType, genre, sort }));
  };

  return (
    <Page
      className="discover-page"
    >
      <div className="discover-page__content container">
        <div className="discover-page__row">
          <Genres
            genres={getDiscoverGenres(mediaType)}
          />

          <Sort />
        </div>

        <CardGrid>
          {(discover.loading && !discover.data.length)
            ? (
              new Array(20).fill(0).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            ) : (
              discover.data.map((it) => (
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

        {(discover.page < discover.total_pages) && (
          <LoadMoreButton
            onLoadMoreClick={handleLoadMore}
            disabled={discover.loading}
          />
        )}
      </div>
    </Page>
  );
};

export default MoviesPage;
