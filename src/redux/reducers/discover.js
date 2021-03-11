import ActionType from 'src/redux/types/discover';

const initialState = {
  data: [],
  loading: true,
  error: false,
  page: 1,
  total_pages: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_RESULTS: {
      const { results, page, total_pages } = payload;

      return {
        ...state,
        data: results,
        page,
        total_pages,
      };
    }

    case ActionType.SET_MORE_RESULTS: {
      const { results, page } = payload;

      return {
        ...state,
        data: [...state.data, ...results],
        page,
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

    case ActionType.RESET_RESULTS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
