import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '@pages/login';
import Orders from '@pages/orders';
import Loader from '@components/loader';
import useAppSelector from '@hooks/useAppSelector';

const App: FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

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
    </>
  );
};

export default App;
