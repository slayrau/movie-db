import ActionType from 'src/redux/types/movies';

const ActionCreator = {
  setMovies: ({ results, page, totalPages }) => ({
    type: ActionType.SET_MOVIES,
    payload: { results, page, totalPages },
  }),

  setMoreMovies: ({ page, results }) => ({
    type: ActionType.SET_MORE_MOVIES,
    payload: { page, results },
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
