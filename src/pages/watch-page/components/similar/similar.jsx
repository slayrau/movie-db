import PropTypes from 'prop-types';

import CardGrid from 'components/card-grid';
import './style.scss';

const Similar = ({ title, children }) => {
  return (
    <section className="watch-page__similar similar">
      <div className="container">
        <h2 className="similar__title">{title}</h2>
      </div>

      <CardGrid>
        {children}
      </CardGrid>
    </section>
  );
};

Similar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Similar;
