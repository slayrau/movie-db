import { Link } from 'react-router-dom';
import { parseISO, getYear } from 'date-fns';
import PropTypes from 'prop-types';

import { MediaType } from 'src/utils/const';
import Title from 'src/components/title';
import './style.scss';

const CreditList = ({ tv, movie }) => {
  const formatedTv = tv.map((it) => ({ ...it, mediaType: MediaType.tv }));
  const formatedMovie = movie.map((it) => ({ ...it, mediaType: MediaType.movie }));

  const sortedByDate = [...formatedTv, ...formatedMovie].sort((a, b) => {
    const aDate = a.release_date || a.first_air_date || '0';
    const bDate = b.release_date || b.first_air_date || '0';

    const aFormated = aDate.split('-').join('');
    const bFormated = bDate.split('-').join('');

    return bFormated - aFormated;
  });

  return (
    <div className="credits-list">
      <Title className="credit-list__title" level={2}>Фильмы и сериалы</Title>
      <div className="credits-list__body">
        <ul className="credits-list__list">
          {sortedByDate.map((it, i) => {
            const name = it.name || it.title;
            const releaseDate = it.release_date || it.first_air_date;
            const href = `/watch/${it.mediaType}/${it.id}`;
            const role = it.character;

            return (
              <li className="credits-list__item" key={it.id + name + i}>
                <Link className="credits-list__link" to={href}>{name}</Link>
                <p className="credits-list__character">{role}</p>
                <p className="credits-list__release-date">
                  {releaseDate
                    ? getYear(parseISO(releaseDate))
                    : '-'}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

CreditList.propTypes = {
  tv: PropTypes.arrayOf(PropTypes.object).isRequired,
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CreditList;
