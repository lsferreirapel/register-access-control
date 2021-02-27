import React from 'react';

import {
  Container, Wrapper, LoginBox, LoginForm, LoginField, PasswordField,
} from '../styles/pages/StyledLogin';

import Brand from '../assets/logo/logo.png';
import GreenStain from '../assets/login-asset.svg';

const Login: React.FC = () => (
  <Container>
    <Wrapper>
      <img
        className="brand"
        src={Brand}
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
        <LoginForm>

          <LoginField htmlFor="login">
            Login
            <input id="login" type="text" />
          </LoginField>

          <PasswordField htmlFor="password">
            Password
            <input id="password" type="password" />
          </PasswordField>

          <button type="submit">Login</button>
        </LoginForm>

      </LoginBox>

    </Wrapper>
  </Container>
);

export default Login;
