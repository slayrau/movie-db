import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProfileImg } from 'src/utils/helpers';
import './style.scss';

const ActorCard = ({ id, name, character, photo }) => {
  const namePlaceholder = name.split(' ').map((n) => n[0]).join('');

  return (
    <Link className="actor-card" to={`/person/${id}`}>
      <div className="actor-card__photo" data-placeholder={namePlaceholder}>
        {photo && (
          <img src={getProfileImg('w185', photo)} alt="" />
        )}
      </div>

      <div className="actor-card__info">
        <p className="actor-card__name" title={name}>{name}</p>
        {character && <p className="actor-card__character" title={character}>{character}</p>}
      </div>
    </Link>
  );
};

ActorCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
  photo: PropTypes.string,
};

ActorCard.defaultProps = {
  photo: '',
  character: null,
};

export default ActorCard;
