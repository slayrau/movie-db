import { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { IconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import Title from 'src/components/title';
import './style.scss';

const PersonBio = ({ biography }) => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const splited = biography.split('\n');
  const result = splited.filter((str) => !!str);

  return (
    <div className="person-bio">
      <Title className="person-bio__title" level={2}>Биография</Title>

      <div className="person-bio__content">
        <div
          className={cn('person-bio__text', {
            'person-bio__text--open': isOpen,
          })}
        >
          {result.map((str, i) => (
            <p key={i}>{str}</p>
          ))}
        </div>

        <button
          className={cn('person-bio__toggler', {
            'person-bio__toggler--open': isOpen,
          })}
          type="button"
          onClick={handleToggle}
        >
          {!isOpen
            ? (
              <>
                Читать еще
                <Icon icon={IconNames.dropdown24} />
              </>
            ) : (
              <>
                Скрыть
                <Icon icon={IconNames.cancel24} />
              </>
            )}
        </button>
      </div>
    </div>
  );
};

PersonBio.propTypes = {
  biography: PropTypes.string.isRequired,
};

export default PersonBio;
