import { combineReducers } from 'redux';

import trending from './trending';
import discover from './discover';
import details from './details';
import person from './person';
import genre from './genre';
import sort from './sort';

const rootReducer = combineReducers({
  trending,
  discover,
  details,
  person,
  genre,
  sort,
});

export default rootReducer;
