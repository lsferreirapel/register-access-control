import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import MyRegisters from '../pages/MyRegisters';

// Providers
import RegisteredTimesProvider from '../contexts/RegisteredTimesContext';
import SidebarProvider from '../contexts/SidebarContext';

// Context
import { AuthContext } from '../contexts/AuthContext';

const Routes: React.FC = () => {
  const { token } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        {/* If exists token, redirect to dashboard */}
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
    </BrowserRouter>
  );
};

export default Routes;
