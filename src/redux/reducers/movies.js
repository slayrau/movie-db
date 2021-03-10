import ActionType from 'src/redux/types/movies';

const initialState = {
  data: [],
  loading: true,
  error: null,
  page: null,
  totalPages: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_MOVIES: {
      const { page, totalPages, results } = payload;

      return {
        ...state,
        data: results,
        page,
        totalPages,
      };
    }

    case ActionType.SET_MORE_MOVIES: {
      const { page, results } = payload;

      return {
        ...state,
        data: [...state.data, ...results],
        page,
      };
    }

    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }

    case ActionType.SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }

    case ActionType.RESET_MOVIES: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
