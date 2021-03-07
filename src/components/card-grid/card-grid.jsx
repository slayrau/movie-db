import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const CardGrid = ({ children }) => {
  return (
    <div className="card-grid">
      <div className="container">
        <ul className="card-grid__list">
          {React.Children.map(children, (child) => (
            <li className="card-grid__item">
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CardGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default CardGrid;
