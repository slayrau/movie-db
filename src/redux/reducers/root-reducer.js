import { combineReducers } from 'redux';

import movies from './movies';
import tvSeries from './tv-series';
import genre from './genre';

const rootReducer = combineReducers({
  movies,
  tvSeries,
  genre,
});

export default rootReducer;
