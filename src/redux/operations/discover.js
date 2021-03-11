import { getDiscover } from 'src/api';
import ActionCreator from 'src/redux/actions/discover';

const Operation = {
  getDiscover: ({ mediaType, genre, sort }) => async (dispatch, getState) => {
    try {
      const initialPage = getState().discover.page;

      const response = await getDiscover({ mediaType, genre, sort, page: initialPage });
      const { results, page, total_pages } = response.data;

      dispatch(ActionCreator.setResults({ results, page, total_pages }));
    } catch (error) {
      dispatch(ActionCreator.setError(error));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },

  loadMoreDiscover: ({ mediaType, genre, sort }) => async (dispatch, getState) => {
    try {
      dispatch(ActionCreator.setLoading(true));

      const nextPage = getState().discover.page + 1;

      const response = await getDiscover({ mediaType, genre, sort, page: nextPage });
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
