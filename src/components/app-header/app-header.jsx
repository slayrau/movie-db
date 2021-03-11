import { NavLink } from 'react-router-dom';

import { Navigation, IconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <nav className="app-header__nav">
          <ul className="app-header__list">
            <li className="app-header__item">
              <NavLink
                className="app-header__link"
                to={Navigation.main.url}
                exact
                aria-label={Navigation.main.title}
              >
                <Icon icon={IconNames.logo} className="app-header__icon-logo" />
              </NavLink>
            </li>

            <li className="app-header__item">
              <NavLink
                className="app-header__link"
                to={Navigation.tv.url}
                exact
              >
                {Navigation.tv.title}
              </NavLink>
            </li>

            <li className="app-header__item">
              <NavLink
                className="app-header__link"
                to={Navigation.movie.url}
                exact
              >
                {Navigation.movie.title}
              </NavLink>
            </li>

            <li className="app-header__item">
              <NavLink
                className="app-header__link"
                to={Navigation.search.url}
                exact
                aria-label={Navigation.search.title}
                title={Navigation.search.title}
              >
                <Icon icon={IconNames.search} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
