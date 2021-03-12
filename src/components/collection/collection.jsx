import PropTypes from 'prop-types';

import Slider from './slider';
import './style.scss';

const Collection = ({ title, breakpoints, children }) => {
  return (
    <section className="collection container">
      <div className="collection__header">
        <h2 className="collection__title">{title}</h2>
      </div>

      <div
        className="collection__body"
      >
        <Slider breakpoints={breakpoints}>
          {children}
        </Slider>
      </div>
    </section>
  );
};

Collection.propTypes = {
  title: PropTypes.string.isRequired,
  breakpoints: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Collection.defaultProps = {
  breakpoints: {},
};

export default Collection;
