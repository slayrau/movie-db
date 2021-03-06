import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { useKeyPress, useOnClickOutside } from 'src/hooks';
import { IconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const Select = ({ data, selectedId, onSelectClick, title, column, right }) => {
  const [dropdownIsOpen, setDropdownOpen] = useState(false);
  const selectRef = useRef();
  const escKeyPressed = useKeyPress('Escape');
  const selected = data.find((it) => String(it.id) === String(selectedId));

  useOnClickOutside(selectRef, () => {
    if (dropdownIsOpen) {
      setDropdownOpen(false);
    }
  });

  useEffect(() => {
    if (escKeyPressed) {
      setDropdownOpen(false);
    }
  }, [escKeyPressed]);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelectClick = (evt) => {
    onSelectClick(evt);
    setDropdownOpen(false);
  };

  return (
    <section className="select" ref={selectRef}>
      <div className="select__header">
        <h2 className="select__title">{title}</h2>
        <button
          className={cn('select__toggler', {
            'select__toggler--open': dropdownIsOpen,
          })}
          type="button"
          onClick={handleToggleDropdown}
        >
          {selected?.name}
          <Icon icon={IconNames.dropdown24} />
        </button>
      </div>

      {dropdownIsOpen && (
        <div
          className={cn('select__dropdown', {
            'select__dropdown--right': right,
          })}
        >
          <ul
            className={cn('select__list', {
              'select__list--column': column,
            })}
          >
            {data.map((it) => (
              <li className="select__item" key={it.id}>
                <button
                  className={cn('select__button', {
                    'select__button--selected': String(it.id) === String(selectedId),
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSelectClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  column: PropTypes.bool,
  right: PropTypes.bool,
};

Select.defaultProps = {
  column: false,
  right: false,
};

export default Select;
