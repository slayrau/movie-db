import cn from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Page = ({ className, children }) => (
  <main className={cn('page', className)}>
    {children}
  </main>
);

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

Page.defaultProps = {
  className: '',
};

export default Page;
