import { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getDiscoverGenres } from 'src/utils/helpers';
import { useQuery } from 'src/hooks';

import DiscoverSelector from 'src/redux/selectors/discover';
import DiscoverOperation from 'src/redux/operations/discover';
import DiscoverActionCreator from 'src/redux/actions/discover';
import GenreActionCreator from 'src/redux/actions/genre';
import GenreSelector from 'src/redux/selectors/genre';
import SortActionCreator from 'src/redux/actions/sort';
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
  const query = useQuery();
  const history = useHistory();
  const dispatch = useDispatch();

  const match = useRouteMatch('/:mediaType');
  const { mediaType } = match.params;

  const data = useSelector(DiscoverSelector.data);
  const loading = useSelector(DiscoverSelector.loading);
  const totalPages = useSelector(DiscoverSelector.totalPages);
  const currentPage = useSelector(DiscoverSelector.page);
  const genre = useSelector(GenreSelector.genreId);
  const sort = useSelector(SortSelector.sortId);

  const handleLoadMore = () => {
    dispatch(DiscoverOperation.loadMoreDiscover({ mediaType, genre, sort }));
  };

  useEffect(() => {
    const queryGenre = query.get('genre');
    const querySort = query.get('sort');

    const params = {
      genre: queryGenre || genre,
      sort: querySort || sort,
    };

    dispatch(GenreActionCreator.setGenreId(params.genre));
    dispatch(SortActionCreator.setSortId(params.sort));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (genre) query.set('genre', genre);
    if (sort) query.set('sort', sort);

    history.push({ search: query.toString() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, sort]);

  useEffect(() => {
    dispatch(DiscoverOperation.getDiscover({ mediaType, genre, sort }));
  }, [dispatch, mediaType, genre, sort]);

  useEffect(() => {
    return () => {
      dispatch(GenreActionCreator.resetGenreId());
      dispatch(SortActionCreator.resetSorting());
      dispatch(DiscoverActionCreator.resetResults());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);

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

export default MoviesPage;
