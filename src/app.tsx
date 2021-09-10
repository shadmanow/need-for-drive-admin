import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@store/hooks';
import { selectAuth } from '@store/selectors';
import { checkUser } from '@store/user/thunks';

import Login from '@pages/login';
import Loader from '@components/loader';
import Alert from '@components/alert';
import Admin from '@pages/admin';

const App: FC = (): JSX.Element => {
  const { isLoggedIn } = useAppSelector(selectAuth);
  const dispatch = useDispatch();

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
      <Loader />
      <Alert />
    </>
  );
};

export default App;
