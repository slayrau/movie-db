import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProfileImg } from 'utils/helpers';
import { IconNames } from 'utils/const';
import Icon from 'components/icon';
import './style.scss';

const ActorCard = ({ id, name, character, photo }) => {
  return (
    <Link className="actor-card" to={`#${id}`}>
      <div className="actor-card__photo">
        {photo
          ? (
            <img src={getProfileImg('w185', photo)} alt="" />
          ) : (
            <Icon icon={IconNames.picture48} />
          )}
      </div>

      <div className="actor-card__info">
        <p className="actor-card__name" title={name}>{name}</p>
        <p className="actor-card__character" title={character}>{character}</p>
      </div>
    </Link>
  );
};

ActorCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

ActorCard.defaultProps = {
  photo: '',
};

export default ActorCard;
