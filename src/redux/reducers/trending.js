import ActionType from 'src/redux/types/trending';
import MediaType from 'src/utils/const/media-type';

const initialState = {
  [MediaType.movie]: [],
  [MediaType.tv]: [],
  [MediaType.person]: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_MOVIES: {
      const { movies } = payload;

      return {
        ...state,
        [MediaType.movie]: movies,
      };
    }

    case ActionType.SET_TV: {
      const { tv } = payload;

      return {
        ...state,
        [MediaType.tv]: tv,
      };
    }

    case ActionType.SET_PERSONS: {
      const { persons } = payload;

      return {
        ...state,
        [MediaType.person]: persons,
      };
    }

    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    case ActionType.RESET_TRENDINGS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
