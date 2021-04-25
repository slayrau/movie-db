import { getDiscover } from 'src/api';
import ActionCreator from 'src/redux/actions/discover';

const Operation = {
  getDiscover: (options) => async (dispatch) => {
    try {
      const response = await getDiscover(options);
      const { results, page, total_pages } = response.data;

      dispatch(ActionCreator.setResults({ results, page, total_pages }));
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },

  loadMoreDiscover: (options) => async (dispatch, getState) => {
    try {
      const { discover } = getState();
      const nextPage = discover.page < discover.total_pages ? +discover.page + 1 : discover.page;

      const response = await getDiscover({ ...options, page: nextPage });
      const { results, page } = response.data;

      dispatch(ActionCreator.setMoreResults({ results, page }));
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },
};

export default Operation;
