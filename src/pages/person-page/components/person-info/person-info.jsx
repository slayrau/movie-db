import { differenceInYears, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import { Gender } from 'src/utils/const';
import Title from 'src/components/title';
import './style.scss';

const PersonInfo = ({ gender, birthday, deathday, placeOfBirth }) => {
  const age = differenceInYears(new Date(), parseISO(birthday));

  return (
    <div className="person-info">
      <Title level={2} className="person-info__title">Персональная информация</Title>

      <ul className="person-info__list">
        <li className="person-info__item">
          <strong>Пол</strong>
          {Gender[gender]}
        </li>

        <li className="person-info__item">
          <strong>Дата рождения</strong>
          {birthday}
          {' '}
          ({age} лет)
        </li>

        {deathday && (
          <li className="person-info__item">
            <strong>Дата смерти</strong>
            {deathday}
          </li>
        )}

        <li className="person-info__item">
          <strong>Место рождения</strong>
          {placeOfBirth}
        </li>
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  gender: PropTypes.number.isRequired,
  birthday: PropTypes.string.isRequired,
  deathday: PropTypes.string,
  placeOfBirth: PropTypes.string.isRequired,
};

PersonInfo.defaultProps = {
  deathday: null,
};

export default PersonInfo;
