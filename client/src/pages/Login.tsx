import React, { FormEvent, useContext, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import {
  Container, Wrapper, LoginBox, LoginForm, LoginField, PasswordField,
} from '../styles/pages/StyledLogin';

import Logo from '../assets/logo/logo.png';
import GreenStain from '../assets/login-asset.svg';
import { AuthContext } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const { asyncLogin, gqlError, isLoading } = useContext(AuthContext);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    await asyncLogin(identifier, password);
  }

  return (
    <Container>
      <Wrapper>
        <img
          className="logo"
          src={Logo}
          alt="Register access control Brand"
          draggable={false}
        />
        <LoginBox>
          <img
            className="green-stain"
            src={GreenStain}
            alt="Green stain"
            draggable={false}
          />
          <LoginForm onSubmit={(e) => handleLogin(e)}>

            <LoginField htmlFor="identifier">
              Login
              <input
                required
                id="identifier"
                type="text"
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </LoginField>

            <PasswordField htmlFor="password">
              Password
              <input
                required
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </PasswordField>
            <div className="alert-div">
              <button type="submit" disabled={isLoading}>Login</button>
              { gqlError && <Alert severity="error">{gqlError}</Alert>}
            </div>
          </LoginForm>
        </LoginBox>

      </Wrapper>
    </Container>
  );
};

export default Login;
