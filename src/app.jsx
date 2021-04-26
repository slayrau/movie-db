import { Switch, Route, Redirect } from 'react-router-dom';

import AppHeader from 'src/components/app-header';
import HomePage from 'src/pages/home-page';
import MoviesPage from 'src/pages/movies-page';
import TvPage from 'src/pages/tv-page';
import WatchPage from 'src/pages/watch-page';
import SearchPage from 'src/pages/search-page';
import PersonPage from 'src/pages/person-page';

const App = () => {
  return (
    <>
      <AppHeader />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tv" component={TvPage} />
        <Route exact path="/movie" component={MoviesPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/watch/:mediaType/:id" component={WatchPage} />
        <Route path="/person/:id" component={PersonPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
