import { getDiscover } from 'src/api';
import ActionCreator from 'src/redux/actions/movies';

const Operations = {
  getMovies: ({ mediaType, genre }) => async (dispatch) => {
    try {
      const response = await getDiscover({ mediaType, genre });

      dispatch(ActionCreator.setMovies(response.data.results));
      dispatch(ActionCreator.setError(null));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },
};

export default Operations;
