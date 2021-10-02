import React, { FC, useEffect, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GLOBAL_LOADING, Loading } from '@store/loadings/types';
import { useAppSelector } from '@store/hooks';
import { selectAuth, selectLoadings } from '@store/selectors';
import { checkUser } from '@store/user/thunks';

import Login from '@pages/login';
import Admin from '@pages/admin';

import Loader from '@components/loader';
import Alert from '@components/alert';

import './app.scss';

export const App: FC = () => {
  const { isLoggedIn } = useAppSelector(selectAuth);
  const loadings = useAppSelector(selectLoadings);
  const dispatch = useDispatch();

  const globalLoadings = useMemo<string[]>(
    () =>
      loadings.reduce<string[]>((gLoadings: string[], loading: Loading) => {
        if (loading.type === GLOBAL_LOADING) {
          gLoadings.push(loading.name);
        }
        return gLoadings;
      }, []),
    [loadings]
  );

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(checkUser());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path='/admin' component={Admin} />
          </>
        ) : (
          <>
            <Route path='/admin/login' component={Login} />
            <Redirect from='/admin/*' to='/admin/login' />
          </>
        )}
      </Switch>
      <Loader
        className='main-loader'
        isLoading={!!globalLoadings.length}
        loadingList={globalLoadings}
      />
      <Alert />
    </>
  );
};
