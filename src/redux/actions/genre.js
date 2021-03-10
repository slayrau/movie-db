import ActionType from 'src/redux/types/genre';

const ActionCreator = {
  setGenreId: (id) => ({
    type: ActionType.SET_GENRE_ID,
    payload: id,
  }),

  resetGenreId: () => ({
    type: ActionType.RESET_GENRE_ID,
  }),
};

export default ActionCreator;
