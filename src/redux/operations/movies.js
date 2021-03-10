import { getDiscover } from 'src/api';
import ActionCreator from 'src/redux/actions/movies';

const Operations = {
  getMovies: ({ mediaType, genre, sort }) => async (dispatch) => {
    try {
      const response = await getDiscover({ mediaType, genre, sort });
      const { page, total_pages: totalPages, results } = response.data;

      dispatch(ActionCreator.setMovies({
        page,
        totalPages,
        results,
      }));

      dispatch(ActionCreator.setError(null));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },

  getMoreMovies: ({ mediaType, genre, sort }) => async (dispatch, getState) => {
    try {
      const nextPage = getState().movies.page + 1;

      const response = await getDiscover({
        mediaType,
        genre,
        sort,
        page: nextPage,
      });

      const { page, results } = response.data;

      dispatch(ActionCreator.setMoreMovies({
        results,
        page,
      }));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },
};

export default Operations;
