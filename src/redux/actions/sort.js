import ActionType from 'src/redux/types/sort';

const ActionCreator = {
  setSortId: (id) => ({
    type: ActionType.SET_SORT_ID,
    payload: id,
  }),

  resetSorting: () => ({
    type: ActionType.RESET_SORTING,
  }),
};

export default ActionCreator;
