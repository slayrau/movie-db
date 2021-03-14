import ActionType from 'src/redux/types/details';

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_DETAILS: {
      const { data } = payload;

      return {
        ...state,
        data,
      };
    }

    case ActionType.SET_LOADING: {
      const { status } = payload;

      return {
        ...state,
        loading: status,
      };
    }

    case ActionType.SET_ERROR: {
      const { error } = payload;

      return {
        ...state,
        error,
      };
    }

    case ActionType.RESET_DETAILS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
