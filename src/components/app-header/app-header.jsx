import { NavLink } from 'react-router-dom';

import { navigation } from 'utils/const';
import './style.scss';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <nav className="app-header__nav">
          <ul className="app-header__list">
            {navigation.map((it) => (
              <li className="app-header__item" key={it.id}>
                <NavLink
                  className="app-header__link"
                  to={it.url}
                  exact
                >
                  {it.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
