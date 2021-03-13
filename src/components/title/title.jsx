import cn from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Title = ({ level, className, children }) => {
  const TitleComponent = `h${level}`;

  return (
    <TitleComponent className={cn('title', `title--${level}`, className)}>
      {children}
    </TitleComponent>
  );
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Title.defaultProps = {
  className: '',
};

export default Title;
