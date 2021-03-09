import ActionType from 'src/redux/types/movies';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_MOVIES:
      return {
        ...state,
        data: payload,
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case ActionType.SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    case ActionType.RESET_MOVIES:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
