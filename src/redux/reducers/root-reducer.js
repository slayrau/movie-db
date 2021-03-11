import { combineReducers } from 'redux';

import discover from './discover';
import genre from './genre';
import sort from './sort';

const rootReducer = combineReducers({
  discover,
  genre,
  sort,
});

export default rootReducer;
