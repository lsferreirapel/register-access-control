import React from 'react';

// Providers
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import AuthProvider from './contexts/AuthContext';

// Global styles
import GlobalStyles, { Container, globalTheme } from './styles/global';

import apolloClient from './services/apollo';
import Routes from './routes';

const App: React.FC = () => (
  <Container>
    <ThemeProvider theme={globalTheme}>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
    <GlobalStyles />
  </Container>
);

export default App;
