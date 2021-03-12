import cn from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const CardSkeleton = ({ actor }) => (
  <div
    className={cn('card-skeleton', {
      'card-skeleton--actor': actor,
    })}
  >
    <div className="card-skeleton__poster card-skeleton__animate" />
    <div className="card-skeleton__text card-skeleton__animate" />
    {!actor && <div className="card-skeleton__date card-skeleton__animate" />}
  </div>
);

CardSkeleton.propTypes = {
  actor: PropTypes.bool,
};

CardSkeleton.defaultProps = {
  actor: false,
};

export default CardSkeleton;
