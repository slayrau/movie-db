import ActionType from 'src/redux/types/discover';

const ActionCreator = {
  setResults: ({ results, page, total_pages }) => ({
    type: ActionType.SET_RESULTS,
    payload: { results, page, total_pages },
  }),

  setMoreResults: ({ results, page }) => ({
    type: ActionType.SET_MORE_RESULTS,
    payload: { results, page },
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: { status },
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: { error },
  }),

  resetResults: () => ({
    type: ActionType.RESET_RESULTS,
  }),
};

export default ActionCreator;
