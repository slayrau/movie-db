import ActionType from 'src/redux/types/person';

const initialState = {
  data: {},
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_PERSON: {
      const { person } = payload;

      return {
        ...state,
        data: person,
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

    case ActionType.RESET_PERSON: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
