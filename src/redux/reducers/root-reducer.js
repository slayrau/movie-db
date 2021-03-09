import { combineReducers } from 'redux';

import movies from './movies';
import tvSeries from './tv-series';

const rootReducer = combineReducers({
  movies,
  tvSeries,
});

export default rootReducer;
