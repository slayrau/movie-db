import ActionType from 'src/redux/types/details';

const ActionCreator = {
  setDetails: (data) => ({
    type: ActionType.SET_DETAILS,
    payload: { data },
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: { status },
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: { error },
  }),

  resetDetails: () => ({
    type: ActionType.RESET_DETAILS,
  }),
};

export default ActionCreator;
