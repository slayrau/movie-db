import { Switch, Route } from 'react-router-dom';

import AppHeader from 'components/app-header';
import HomePage from 'pages/home-page';
import TvSeriesPage from 'pages/tv-series-page';
import MoviesPage from 'pages/movies-page';
import SearchPage from 'pages/search-page';

const App = () => {
  return (
    <>
      <AppHeader />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tv-series" component={TvSeriesPage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </>
  );
};

export default App;
