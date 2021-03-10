import ActionType from 'src/redux/types/tv-series';

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
    case ActionType.SET_TV_SERIES: {
      const { results, page, totalPages } = payload;

      return {
        ...state,
        data: results,
        page,
        totalPages,
      };
    }

    case ActionType.SET_MORE_TV_SERIES: {
      const { results, page } = payload;

      return {
        ...state,
        data: [...state.data, ...results],
        page,
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
