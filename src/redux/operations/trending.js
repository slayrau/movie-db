import { getTrending } from 'src/api';
import ActionCreator from 'src/redux/actions/trending';

import Trending from 'src/utils/const/trending';

const Operation = {
  getTrending: () => async (dispatch) => {
    try {
      const responseMovies = await getTrending(Trending.movieByDay);
      const responseTv = await getTrending(Trending.tvByDay);
      const responsePersons = await getTrending(Trending.personByDay);

      const moviesResults = responseMovies.data.results;
      const tvResults = responseTv.data.results;
      const personsResults = responsePersons.data.results;

      dispatch(ActionCreator.setMovies(moviesResults));
      dispatch(ActionCreator.setTv(tvResults));
      dispatch(ActionCreator.setPersons(personsResults));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },
};

export default Operation;
