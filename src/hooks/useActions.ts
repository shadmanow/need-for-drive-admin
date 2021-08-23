import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '@store/auth/creators';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(authActions, dispatch);
};

export default useActions;
