import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MediaTypeNames } from 'utils/const';
import { getPosterUrl, getReleaseYear } from 'utils/helpers';
import './style.scss';

const Card = ({
  id,
  media_type,
  title,
  poster_path,
  release_date,
  adult,
}) => {
  const ariaMediaType = `${MediaTypeNames[media_type]} - ${title}`;
  const ariaReleaseDate = `Дата выхода - ${release_date}`;
  const ariaImgAlt = `Постер ${title}`;
  const ariaAdult = 'Рейтинг 18+';
  const posterUrl = getPosterUrl('w300', poster_path);

  return (
    <li className="card__wrapper">
      <Link
        className="card"
        to={`/watch/${id}`}
        aria-label={`
        ${ariaMediaType}.
        ${ariaReleaseDate}.
        ${adult ? ariaAdult : ''}
      `}
      >
        <div className="card__container">
          <div className="card__poster">
            <img src={posterUrl} alt={ariaImgAlt} />
          </div>
          <div className="card__body">
            <h3 className="card__title" title={title}>{title}</h3>
            <time
              className="card__release-date"
              dateTime={release_date}
              aria-label={ariaReleaseDate}
            >
              {getReleaseYear(release_date)}
            </time>
            {adult && (
              <strong className="card__adult" aria-label={ariaAdult}>18+</strong>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  media_type: PropTypes.oneOf(['tv', 'movie']).isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  adult: PropTypes.bool,
};

Card.defaultProps = {
  adult: null,
};

export default Card;
