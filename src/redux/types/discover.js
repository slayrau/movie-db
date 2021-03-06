const PREFIX = 'DISCOVER';

const ActionType = {
  SET_RESULTS: `${PREFIX}/SET_RESULTS`,
  SET_MORE_RESULTS: `${PREFIX}/SET_MORE_RESULTS`,
  INCREMENT_PAGE: `${PREFIX}/INCREMENT_PAGE`,
  SET_LOADING: `${PREFIX}/SET_LOADING`,
  SET_ERROR: `${PREFIX}/SET_ERROR`,
  RESET_RESULTS: `${PREFIX}/RESET_RESULTS`,
};

export default ActionType;
