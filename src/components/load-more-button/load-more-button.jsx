import PropTypes from 'prop-types';

import './style.scss';

const LoadMoreButton = ({ onLoadMoreClick, disabled }) => {
  return (
    <button
      className="load-more-button"
      type="button"
      onClick={onLoadMoreClick}
      disabled={disabled}
    >
      Загрузить еще
    </button>
  );
};

LoadMoreButton.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default LoadMoreButton;
