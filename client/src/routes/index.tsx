import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

// Pages
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

import RegisteredTimesProvider from '../contexts/RegisteredTimesContext';
import MyRegisters from '../pages/MyRegisters';
import SidebarProvider from '../contexts/SidebarContext';

const Routes: React.FC = () => {
  const { token } = useContext(AuthContext);

  return (
    <Switch>
      { !token ? (
        <Route path="/" component={Login} />
      ) : (
        <RegisteredTimesProvider>
          <SidebarProvider>
            <Route path="/" exact component={Dashboard} />
            <Route path="/registers" component={MyRegisters} />
          </SidebarProvider>
        </RegisteredTimesProvider>
      )}
    </Switch>
  );
};

export default Routes;
