import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import GlobalStyles, { Container } from './styles/global';

import AuthProvider from './contexts/AuthContext';
import apolloClient from './services/apollo';

import Routes from './routes';

const App: React.FC = () => (
  <Container>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
    <GlobalStyles />
  </Container>
);

export default App;
