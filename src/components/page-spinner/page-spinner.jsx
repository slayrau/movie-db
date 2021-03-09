import PropTypes from 'prop-types';

import Spinner from 'src/components/spinner';
import './style.scss';

const PageSpinner = ({ size }) => {
  return (
    <div className="page-spinner">
      <Spinner
        size={size}
      />
    </div>
  );
};

PageSpinner.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'regular',
    'medium',
    'large',
  ]).isRequired,
};

export default PageSpinner;
