import { NavLink } from 'react-router-dom';

import { navigation, IconNames } from 'src/utils/const';
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
                to={navigation.main.url}
                exact
                aria-label={navigation.main.title}
              >
                <Icon icon={IconNames.logo} className="app-header__icon-logo" />
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
