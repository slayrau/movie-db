import PropTypes from 'prop-types';

import Slider from './slider';
import './style.scss';

const Carousel = ({ title, children }) => {

  return (
    <section className="collection">
      <div className="collection__header">
        <h2 className="collection__title">{title}</h2>
      </div>

      <div className="collection__body">
        <Slider>
          {children}
        </Slider>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Carousel;
