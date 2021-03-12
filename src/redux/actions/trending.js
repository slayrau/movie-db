import ActionType from 'src/redux/types/trending';

const ActionCreator = {
  setMovies: (movies) => ({
    type: ActionType.SET_MOVIES,
    payload: { movies },
  }),

  setTv: (tv) => ({
    type: ActionType.SET_TV,
    payload: { tv },
  }),

  setPersons: (persons) => ({
    type: ActionType.SET_PERSONS,
    payload: { persons },
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: { status },
  }),

  setError: (status) => ({
    type: ActionType.SET_ERROR,
    payload: { status },
  }),

  resetTrendings: () => ({
    type: ActionType.RESET_TRENDINGS,
  }),
};

export default ActionCreator;
