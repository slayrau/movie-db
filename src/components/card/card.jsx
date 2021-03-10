import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import posterPlaceholder from 'src/assets/images/poster-placeholder.png';
import { MediaTypes } from 'src/utils/const';
import { getPosterUrl } from 'src/utils/helpers';
import './style.scss';

const Card = ({ id, mediaType, title, posterPath }) => {
  return (
    <Link
      className="card"
      to={`/watch/${mediaType}/${id}`}
      aria-label={`${MediaTypes[mediaType].name} - ${title}`}
    >
      <div className="card__container">
        <div className="card__poster">
          {posterPath
            ? (
              <img src={getPosterUrl('w300', posterPath)} alt={`Постер ${title}`} />
            ) : (
              <img src={posterPlaceholder} alt="Постер отсутствует" />
            )}
        </div>
        <div className="card__footer">
          <h3 className="card__title" title={title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  mediaType: PropTypes.oneOf(['tv', 'movie']).isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default Card;
