import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreator from 'src/redux/actions/genre';
import Selector from 'src/redux/selectors/genre';

import Select from 'src/components/select';
import './style.scss';

const Genres = ({ genres }) => {
  const dispatch = useDispatch();
  const currentGenreId = useSelector(Selector.genreId);
  const selectedGenre = genres.find((genre) => String(genre.id) === String(currentGenreId));

  const handleSelect = (evt) => {
    dispatch(ActionCreator.setGenreId(evt.target.id));
  };

  useEffect(() => {
    return () => {
      dispatch(ActionCreator.resetGenreId());
    };
  }, []);

  return (
    <Select
      title=""
      data={genres}
      selected={selectedGenre}
      onSelectClick={handleSelect}
    />
  );
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Genres;
