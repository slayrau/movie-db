import { NavLink } from 'react-router-dom';

import { navigation, ICON_NAMES } from 'utils/const';
import Icon from 'components/icon';
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
                to={navigation.main.url}
                exact
                aria-label={navigation.main.title}
              >
                <Icon icon={ICON_NAMES.logo} className="app-header__icon-logo" />
              </NavLink>
            </li>

            <li className="app-header__item">
              <NavLink
                className="app-header__link"
                to={navigation.tvSeries.url}
                exact
              >
                {navigation.tvSeries.title}
              </NavLink>
            </li>

            <li className="app-header__item">
              <NavLink
                className="app-header__link"
                to={navigation.movies.url}
                exact
              >
                {navigation.movies.title}
              </NavLink>
            </li>

            <li className="app-header__item">
              <NavLink
                className="app-header__link"
                to={navigation.search.url}
                exact
                aria-label={navigation.search.title}
                title={navigation.search.title}
              >
                <Icon icon={ICON_NAMES.search} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
