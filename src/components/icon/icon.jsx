import cn from 'classnames';
import PropTypes from 'prop-types';

import { ICON_NAMES } from 'utils/const';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import './style.scss';

const ICON_TYPES = {
  [ICON_NAMES.search]: SearchIcon,
  [ICON_NAMES.logo]: LogoIcon,
};

const Icon = ({ icon, className }) => {
  const IconComponent = ICON_TYPES[icon];

  return (
    <IconComponent
      className={cn('icon', className)}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf([
    ICON_NAMES.search,
    ICON_NAMES.logo,
  ]).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
