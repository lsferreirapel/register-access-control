import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles, { Container } from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <Container>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </Container>
);

export default App;
