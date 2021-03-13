import { getPerson } from 'src/api';
import ActionCreator from 'src/redux/actions/person';

const Operation = {
  getPerson: (id) => async (dispatch) => {
    try {
      const response = await getPerson(id);

      dispatch(ActionCreator.setPerson(response.data));
    } catch (err) {
      dispatch(ActionCreator.setError(err));
    } finally {
      dispatch(ActionCreator.setLoading(false));
    }
  },
};

export default Operation;
