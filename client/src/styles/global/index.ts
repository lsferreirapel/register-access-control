import { createGlobalStyle } from 'styled-components';

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
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
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
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
