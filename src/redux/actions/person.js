import ActionType from 'src/redux/types/person';

const ActionCreator = {
  setPerson: (person) => ({
    type: ActionType.SET_PERSON,
    payload: { person },
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: ({ status }),
  }),

  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: ({ error }),
  }),

  resetPerson: () => ({
    type: ActionType.RESET_PERSON,
  }),
};

export default ActionCreator;
