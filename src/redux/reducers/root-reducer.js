import { combineReducers } from 'redux';

import trending from './trending';
import discover from './discover';
import genre from './genre';
import sort from './sort';

const rootReducer = combineReducers({
  trending,
  discover,
  genre,
  sort,
});

export default rootReducer;
