import { useEffect, useRef, useState } from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { useKeyPress, useOnClickOutside } from 'src/hooks';
import { IconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const FormikSelect = ({ data, grid, ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const [field, meta, helpers] = useField(props);
  const label = data.find((item) => String(item.id) === String(meta.value)).name;
  const selectRef = useRef();
  const escapeKeyPressed = useKeyPress('Escape');

  useEffect(() => {
    if (isOpen && escapeKeyPressed) {
      setOpen(false);
    }
  }, [escapeKeyPressed, isOpen]);

  useOnClickOutside(selectRef, () => {
    if (isOpen) {
      setOpen(false);
    }
  });

  const handleToggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (evt) => {
    helpers.setValue(evt.target.id);
    setOpen(false);
  };

  return (
    <div className="formik-select" ref={selectRef}>
      <div className="formik-select__header">
        <button
          className={cn('formik-select__toggler', {
            'formik-select__toggler--open': isOpen,
          })}
          type="button"
          onClick={handleToggleDropdown}
        >
          {label}
          <Icon icon={IconNames.dropdown24} />
        </button>
      </div>

      {isOpen && (
        <div className="formik-select__dropdown">
          <ul
            className={cn('formik-select__list', {
              'formik-select__list--grid': grid,
            })}
          >
            {data.map((item) => (
              <li className="formik-select__item" key={item.id}>
                <button
                  className={cn('formik-select__select-button', {
                    'formik-select__select-button--selected': String(meta.value) === String(item.id),
                  })}
                  type="button"
                  id={item.id}
                  onClick={handleClick}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

FormikSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  grid: PropTypes.bool,
};

FormikSelect.defaultProps = {
  grid: false,
};

export default FormikSelect;
