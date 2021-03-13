import { combineReducers } from 'redux';

import trending from './trending';
import discover from './discover';
import person from './person';
import genre from './genre';
import sort from './sort';

const rootReducer = combineReducers({
  trending,
  discover,
  person,
  genre,
  sort,
});

export default rootReducer;
