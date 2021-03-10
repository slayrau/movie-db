import { getDiscover } from 'src/api';
import ActionCreator from 'src/redux/actions/tv-series';

const Operations = {
  getTvSeries: ({ mediaType, genre, sort }) => async (dispatch) => {
    try {
      const response = await getDiscover({ mediaType, genre, sort });

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
