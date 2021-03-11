import { Switch, Route } from 'react-router-dom';

import AppHeader from 'src/components/app-header';
import HomePage from 'src/pages/home-page';
import DiscoverPage from 'src/pages/discover-page';
import WatchPage from 'src/pages/watch-page';

const App = () => {
  return (
    <>
      <AppHeader />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tv" component={DiscoverPage} />
        <Route exact path="/movie" component={DiscoverPage} />
        <Route path="/watch/:mediaType/:id" component={WatchPage} />
      </Switch>
    </>
  );
};

export default App;
