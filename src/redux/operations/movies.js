import { getTrendingMovies } from 'src/api';
import ActionCreator from 'src/redux/actions/movies';

const Operations = {
  getMovies: () => async (dispatch) => {
    try {
      const response = await getTrendingMovies();

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
