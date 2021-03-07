import cn from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Page = ({ className, children }) => (
  <main className={cn('page', className)}>
    <div className="page__container">
      {children}
    </div>
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
