import { combineReducers } from 'redux';

import movies from './movies';
import tvSeries from './tv-series';
import genre from './genre';
import sort from './sort';

const rootReducer = combineReducers({
  movies,
  tvSeries,
  genre,
  sort,
});

export default rootReducer;
