import PropTypes from 'prop-types';

import './style.scss';

const Page = ({ children }) => (
  <main className="page">
    <div className="page__container">
      {children}
    </div>
  </main>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Page;
