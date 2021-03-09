import PropTypes from 'prop-types';
import './style.scss';

import { IconNames } from 'src/utils/const';
import Icon from 'src/components/icon';

const getSpinnerIcon = (size) => {
  switch (size) {
    case 'small': return <Icon icon={IconNames.spinner16} />;
    case 'regular': return <Icon icon={IconNames.spinner24} />;
    case 'medium': return <Icon icon={IconNames.spinner32} />;
    case 'large': return <Icon icon={IconNames.spinner44} />;
    default: return <Icon icon={IconNames.spinner24} />;
  }
};

const Spinner = ({ size = 'regular' }) => (
  <div className="spinner">
    <div className="spinner__spin">
      {getSpinnerIcon(size)}
    </div>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'regular',
    'medium',
    'large',
  ]).isRequired,
};

export default Spinner;
