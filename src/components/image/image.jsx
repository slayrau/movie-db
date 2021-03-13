import PropTypes from 'prop-types';

import './style.scss';

const Image = ({ src }) => {
  return (
    <div className="image">
      <img src={src} alt="" />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
