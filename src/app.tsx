import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';

const App: React.FC = () => (
  <Switch>
    <Route path='/' component={LoginPage} />
  </Switch>
);

export default App;
