import { Drawer } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  & > .button-container {
    position: absolute;
    width: 65vw;
    min-width: 61rem;
    top: 5vh;
    left: calc(50% + 5rem);
    transform: translateX(-50%);

    & > button {
    float: right;

    padding: 1.188rem 2.188rem;
    border: none;

    background: var(--green);

    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    color: var(--white);


    @media(max-width: 1000px) {
      width: 90vw;
      min-width: 600px;
      left: 50%;
    }

  }
  }

`;

export const RegisterDrawer = styled(Drawer)`

`;
