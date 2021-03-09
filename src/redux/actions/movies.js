import ActionType from 'src/redux/types/movies';

const ActionCreator = {
  setMovies: (movies) => ({
    type: ActionType.SET_MOVIES,
    payload: movies,
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status,
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),

  resetMovies: () => ({
    type: ActionType.RESET_MOVIES,
  }),
};

export default ActionCreator;
