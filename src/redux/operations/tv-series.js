import { getDiscover } from 'src/api';
import ActionCreator from 'src/redux/actions/tv-series';

const Operations = {
  getTvSeries: ({ mediaType, genre, sort }) => async (dispatch) => {
    try {
      const response = await getDiscover({ mediaType, genre, sort });
      const { results, page, total_pages: totalPages } = response.data;

      dispatch(ActionCreator.setTvSeries({
        results,
        page,
        totalPages,
      }));

      dispatch(ActionCreator.setError(null));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },

  getMoreTvSeries: ({ mediaType, genre, sort }) => async (dispatch, getState) => {
    try {
      const nextPage = getState().tvSeries.page + 1;

      const response = await getDiscover({
        mediaType,
        genre,
        sort,
        page: nextPage,
      });

      const { page, results } = response.data;

      dispatch(ActionCreator.setMoreTvSeries({
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
