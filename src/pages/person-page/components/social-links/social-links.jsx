import PropTypes from 'prop-types';

import { IconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const SocialLinks = ({ links }) => {
  const facebook = links.facebook_id;
  const twitter = links.twitter_id;
  const instagram = links.instagram_id;

  return (
    <div className="social-links">
      <ul className="social-links__list">
        {facebook && (
          <li className="social-links__item">
            <a
              className="social-links__link"
              href={`https://facebook.com/${facebook}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Профиль в фейсбук"
            >
              <Icon icon={IconNames.facebook24} />
            </a>
          </li>
        )}

        {instagram && (
          <li className="social-links__item">
            <a
              className="social-links__link"
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Профиль в инстаграм"
            >
              <Icon icon={IconNames.instagram24} />
            </a>
          </li>
        )}

        {twitter && (
          <li className="social-links__item">
            <a
              className="social-links__link"
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Профиль в твиттер"
            >
              <Icon icon={IconNames.twitter24} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

SocialLinks.propTypes = {
  links: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ).isRequired,
};

export default SocialLinks;
