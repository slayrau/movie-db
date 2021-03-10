import ActionType from 'src/redux/types/tv-series';

const ActionCreator = {
  setTvSeries: ({ results, page, totalPages }) => ({
    type: ActionType.SET_TV_SERIES,
    payload: { results, page, totalPages },
  }),

  setMoreTvSeries: ({ results, page }) => ({
    type: ActionType.SET_MORE_TV_SERIES,
    payload: { results, page },
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
