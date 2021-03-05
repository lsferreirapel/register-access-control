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
    bottom: 83vh;
    left: calc(50% + 5rem);
    transform: translateX(-50%);

    :hover {
      button {
        background: #00ad4a;
      }
    }

    & > button {
      float: right;

      padding: 1.188rem 2.188rem;
      border: none;

      @media(max-width: 1000px) {
        width: 100%;
        margin: 0;
      }
    }

    @media(max-width: 1000px) {
      position: fixed;
      margin: 0 auto;
      bottom: 0;
      left: 50%;
      z-index: 999;

      width: 100vw;
      min-width: 600px;

    }
  }
`;

export const RegisterDrawer = styled(Drawer)`

`;
