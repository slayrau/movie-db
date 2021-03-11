import { Link } from 'react-router-dom';
import { getYear, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import posterPlaceholder from 'src/assets/images/poster-placeholder.png';
import { MediaTypes } from 'src/utils/const';
import { getPosterUrl } from 'src/utils/helpers';
import './style.scss';

const Card = ({ id, mediaType, title, posterPath, releaseDate, voteAverage }) => {
  const ariaTitle = `${MediaTypes[mediaType].name} - ${title}`;
  const ariaDate = `Дата выхода - ${releaseDate}`;
  const ariaVoteAverage = `Рейтинг - ${voteAverage}`;
  const ariaCard = `${ariaTitle}. ${ariaDate}. ${voteAverage ? ariaVoteAverage : ''}`;

  return (
    <Link
      className="card"
      to={`/watch/${mediaType}/${id}`}
      aria-label={ariaCard}
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
          <h3 className="card__title" aria-label={ariaTitle} title={title}>{title}</h3>
          <p className="card__release-year" aria-label={ariaDate}>{getYear(parseISO(releaseDate))}</p>
          {!!voteAverage && <p className="card__vote-rating" aria-label={ariaVoteAverage}>{voteAverage}</p>}
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
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};

export default Card;
