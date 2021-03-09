import ActionType from 'src/redux/types/tv-series';

const ActionCreator = {
  setTvSeries: (tvSeries) => ({
    type: ActionType.SET_TV_SERIES,
    payload: tvSeries,
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status,
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),

  resetTvSeries: () => ({
    type: ActionType.RESET_TV_SERIES,
  }),
};

export default ActionCreator;
