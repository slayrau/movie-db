import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SortTypes } from 'src/utils/const';
import Selector from 'src/redux/selectors/sort';
import ActionCreator from 'src/redux/actions/sort';

import Select from 'src/components/select';
import './style.scss';

const Sort = () => {
  const dispatch = useDispatch();
  const currentSortId = useSelector(Selector.sortId);
  const selectedSort = SortTypes.find((sort) => sort.id === currentSortId);

  const handleSelectClick = (evt) => {
    dispatch(ActionCreator.setSortId(evt.target.id));
  };

  useEffect(() => {
    return () => {
      dispatch(ActionCreator.resetSorting());
    };
  }, []);

  return (
    <Select
      title=""
      data={SortTypes}
      selected={selectedSort}
      onSelectClick={handleSelectClick}
      column
    />
  );
};

export default Sort;
