import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

// Pages
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

import RegisteredTimesProvider from '../contexts/RegisteredTimesContext';

const Routes: React.FC = () => {
  const { token } = useContext(AuthContext);

  return (
    <Switch>
      { !token ? (
        <Route path="/" component={Login} />
      ) : (
        <RegisteredTimesProvider>
          <Route path="/" exact component={Dashboard} />
        </RegisteredTimesProvider>
      )}
      {/* Just to test */}
      <Route path="/dashboard" component={Dashboard} />

    </Switch>
  );
};

export default Routes;
