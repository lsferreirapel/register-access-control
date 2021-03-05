import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Container, globalTheme } from './styles/global';

import apolloClient from './services/apollo';
import AuthProvider from './contexts/AuthContext';

import Routes from './routes';

const App: React.FC = () => (
  <Container>
    <ThemeProvider theme={globalTheme}>
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
    <GlobalStyles />
  </Container>
);

export default App;
