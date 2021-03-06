import { createMuiTheme } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';

export const globalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#219653',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Nunito',
      'sans-serif',
    ].join(','),
    fontSize: 16,
  },
  overrides: {
    MuiCircularProgress: {
      svg: {
        color: '#219653',
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: 'Montserrat, sans-serif',
      },
      body2: {
        fontFamily: 'Montserrat, sans-serif',
      },
    },
  },
});

export default createGlobalStyle`
  :root {
    /* Default colors setup */
    --background: #E5E5E5;
    --background-login: #333333;
    --white: #FFFF;
    --green: #219653;
    --green-light: #6FCF97;
    --gray: #A5A5A5;
    --text: #303030;
    --text-gray: #888888;
  }

  /* Set font-size to lower devices */
  @media(max-width: 1300px) {
    html {
      font-size: 90%;
    }
  }
  @media(max-width: 1150px) {
    html {
      font-size: 80%;
    }
  }

  /* CSS RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    color: var(--text);
  }
  body, input, textarea, button {
    /* Set default font */
    font: 400 1rem "Nunito", sans-serif;


    /* font-family: 'Montserrat', sans-serif; */
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
    &:focus {
      outline: none;
      outline-offset: none;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
