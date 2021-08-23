import { Dispatch } from 'react';

import { login } from '@api/auth';
import { LoginData, LoginRequestData } from '@api/auth/types';
import {
  StartLoadingAction,
  EndLoadingAction,
  SetErrorAction
} from '@store/global/actions';
import { SetAuthAction } from './actions';

export const TryLogin =
  (data: LoginRequestData) => async (dispatch: Dispatch<any>) => {
    dispatch(StartLoadingAction());
    try {
      const auth: LoginData = await login(data);
      dispatch(SetAuthAction(auth));
      dispatch(EndLoadingAction());
    } catch (e) {
      dispatch(SetErrorAction(e));
      dispatch(EndLoadingAction());
    }
  };
