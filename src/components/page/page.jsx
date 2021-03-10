import cn from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Page = ({ className, subHeader, children }) => (
  <main className={cn('page', className)}>
    {subHeader && (
      <div className="page__sub-header container">
        {subHeader}
      </div>
    )}

    <div className="page__content">
      {children}
    </div>
  </main>
);

Page.propTypes = {
  className: PropTypes.string,
  subHeader: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

Page.defaultProps = {
  className: '',
  subHeader: null,
};

export default Page;
