import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

// Pages
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes: React.FC = () => {
  const { token } = useContext(AuthContext);

  return (
    <Switch>
      { !token ? (
        <Route path="/" exact component={Login} />
      ) : (
        <Route path="/" exact component={Dashboard} />
      )}

    </Switch>
  );
};

export default Routes;
