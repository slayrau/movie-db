import PropTypes from 'prop-types';

import './style.scss';

const CardGrid = ({ children }) => {
  return (
    <ul className="card-grid">
      {children}
    </ul>
  );
};

CardGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default CardGrid;
