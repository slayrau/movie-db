import { getDetails } from 'src/api';
import ActionCreator from 'src/redux/actions/details';

const Operation = {
  getDetails: ({ mediaType, id }) => async (dispatch) => {
    try {
      const response = await getDetails({ mediaType, id });

      dispatch(ActionCreator.setDetails(response.data));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },
};

export default Operation;
