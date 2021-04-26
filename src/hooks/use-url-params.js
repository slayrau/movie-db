import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import GenreActionCreator from 'src/redux/actions/genre';
import SortActionCreator from 'src/redux/actions/sort';

import { useQuery } from 'src/hooks';
import { ALL_GENRES, DEFAULT_SORT_ID } from 'src/utils/const';

const useUrlParams = () => {
  const query = useQuery();
  const history = useHistory();
  const dispatch = useDispatch();

  const queryGenre = query.get('genre');
  const querySort = query.get('sort');
  const [genre, setGenre] = useState(queryGenre || ALL_GENRES);
  const [sort, setSort] = useState(querySort || DEFAULT_SORT_ID);

  const handleGenreClick = (event) => {
    setGenre(event.target.id);
  };

  const handleSortClick = (event) => {
    setSort(event.target.id);
  };

  const updateQuery = (params) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        query.set(key, value);
      } else {
        query.delete(key);
      }
    });
  };

  useEffect(() => {
    updateQuery({ genre, sort });
    history.replace({ search: query.toString() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, sort]);

  useEffect(() => {
    dispatch(GenreActionCreator.resetGenreId());
    dispatch(SortActionCreator.resetSorting());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    genre,
    sort,
    handleGenreClick,
    handleSortClick,
  };
};

export default useUrlParams;
