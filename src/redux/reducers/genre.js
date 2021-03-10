import { ALL_GENRES } from 'src/utils/const';
import ActionType from 'src/redux/types/genre';

const initialState = {
  id: ALL_GENRES,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_GENRE_ID: {
      return {
        id: payload,
      };
    }

    case ActionType.RESET_GENRE_ID: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
