import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import GlobalStyles, { Container } from './styles/global';

import apolloClient from './services/apollo';
import AuthProvider from './contexts/AuthContext';
import RegisteredTimesProvider from './contexts/RegisteredTimesContext';

import Routes from './routes';

const App: React.FC = () => (
  <Container>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <RegisteredTimesProvider>
            <Routes />
          </RegisteredTimesProvider>
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
    <GlobalStyles />
  </Container>
);

export default App;
