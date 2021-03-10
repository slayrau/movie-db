import { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { IconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const Select = ({ title, data, selected, onSelectClick }) => {
  const [dropdownIsOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelectClick = (evt) => {
    onSelectClick(evt);
    setDropdownOpen(false);
  };

  return (
    <section className="select">
      <div className="select__header">
        <h2 className="select__title">{title}</h2>
        <button
          className={cn('select__toggler', {
            'select__toggler--open': dropdownIsOpen,
          })}
          type="button"
          onClick={handleToggleDropdown}
        >
          {selected.name}
          <Icon icon={IconNames.dropdown24} />
        </button>
      </div>

      {dropdownIsOpen && (
        <div className="select__dropdown">
          <ul className="select__list">
            {data.map((it) => (
              <li className="select__item" key={it.id}>
                <button
                  className={cn('select__button', {
                    'select__button--selected': String(it.id) === String(selected.id),
                  })}
                  id={it.id}
                  type="button"
                  onClick={handleSelectClick}
                >
                  {it.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  }).isRequired,
  onSelectClick: PropTypes.func.isRequired,
};

export default Select;
