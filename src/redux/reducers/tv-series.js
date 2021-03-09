import ActionType from 'src/redux/types/tv-series';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_TV_SERIES: {
      return {
        ...state,
        data: payload,
      };
    }

    case ActionType.SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }

    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }

    case ActionType.RESET_TV_SERIES: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
