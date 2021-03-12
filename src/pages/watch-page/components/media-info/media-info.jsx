import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const MediaInfo = ({
  title,
  mediaTypeName,
  backdropSrc,
  releaseDate,
  duration,
  genres,
  overview,
}) => {
  return (
    <section className="watch-page__media-info media-info">
      <div className="media-info__backdrop">
        <img src={backdropSrc} alt="" />
      </div>

      <div className="container">
        <div className="media-info__content">
          <p className="media-info__media-type">{mediaTypeName}</p>

          <h1 className="media-info__title">{title}</h1>

          <div className="media-info__metadata">
            <span className="media-info__metadata-item" aria-label={`Дата выхода - ${releaseDate}`}>{releaseDate}</span>
            {duration && (
              <span className="media-info__metadata-item" aria-label={`Длительность - ${duration}`}>{duration}</span>
            )}
          </div>

          <div className="media-info__genres">
            <ul className="media-info__genres-list">
              {genres.map((genre) => (
                <li className="media-info__genres-item" key={genre.id}>
                  <Link className="media-info__genres-link" to={`#${genre.id}`}>
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="media-info__overview">{overview}</p>
        </div>
      </div>
    </section>
  );
};

MediaInfo.propTypes = {
  title: PropTypes.string.isRequired,
  mediaTypeName: PropTypes.string.isRequired,
  backdropSrc: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  duration: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  overview: PropTypes.string.isRequired,
};

MediaInfo.defaultProps = {
  duration: '',
};

export default MediaInfo;
