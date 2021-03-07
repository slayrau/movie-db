import './style.scss';

const CardSkeleton = () => (
  <div className="card-skeleton">
    <div className="card-skeleton__poster card-skeleton__animate" />
    <div className="card-skeleton__text card-skeleton__animate" />
  </div>
);

export default CardSkeleton;
