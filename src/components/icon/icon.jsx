import cn from 'classnames';
import PropTypes from 'prop-types';

import { IconNames } from 'utils/const';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import './style.scss';

const ICON_TYPES = {
  [IconNames.search]: SearchIcon,
  [IconNames.logo]: LogoIcon,
  [IconNames.chevronLeft]: ChevronLeft,
  [IconNames.chevronRight]: ChevronRight,
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
    IconNames.search,
    IconNames.logo,
    IconNames.chevronLeft,
    IconNames.chevronRight,
  ]).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
