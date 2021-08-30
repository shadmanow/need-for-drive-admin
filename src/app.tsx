import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@store/hooks';
import { selectAuth } from '@store/selectors';
import { checkUser } from '@store/user/thunks';

import Login from '@pages/login';
import Orders from '@pages/orders';
import Loader from '@components/loader';
import Alert from '@components/alert';

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
            <Route path='/admin/orders' component={Orders} />
            <Redirect from='/admin/*' to='/admin/orders' />
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
