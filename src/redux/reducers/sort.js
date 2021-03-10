import { DEFAULT_SORT_ID } from 'src/utils/const';
import ActionType from 'src/redux/types/sort';

const initialState = {
  id: DEFAULT_SORT_ID,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_SORT_ID: {
      return {
        id: payload,
      };
    }

    case ActionType.RESET_SORTING: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
