import { getTrendingTvSeries } from 'src/api';
import ActionCreator from 'src/redux/actions/tv-series';

const Operations = {
  getTvSeries: () => async (dispatch) => {
    try {
      const response = await getTrendingTvSeries();

      dispatch(ActionCreator.setTvSeries(response.data.results));
      dispatch(ActionCreator.setError(null));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },
};

export default Operations;
