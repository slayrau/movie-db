import cn from 'classnames';
import PropTypes from 'prop-types';

import { IconNames } from 'src/utils/const';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg';
import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'src/assets/icons/chevron-right.svg';
import { ReactComponent as Picture48 } from 'src/assets/icons/48/picture.svg';
import { ReactComponent as LogoIcon } from 'src/assets/images/logo.svg';
import './style.scss';

const ICON_TYPES = {
  [IconNames.search]: SearchIcon,
  [IconNames.logo]: LogoIcon,
  [IconNames.chevronLeft]: ChevronLeft,
  [IconNames.chevronRight]: ChevronRight,
  [IconNames.picture48]: Picture48,
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
    IconNames.picture48,
  ]).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
