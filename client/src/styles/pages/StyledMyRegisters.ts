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

  .MuiDrawer-paper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-width: 25rem;

    & > header {
      width: 100%;
      height:5rem;
      border-bottom: 1px solid var(--gray);
      padding: 1rem 0 0 1.75rem;

      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: 1.2rem;
      letter-spacing: -0.01em;
      color: var(--text);
    }

    & > section {

      flex: 1;
      margin-top: 3.25rem;
      width: 18.75rem;

      & > .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
        height: 3.75rem;

        margin-bottom: 3.125rem;

        & > h4 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.875rem;
          color: var(--text);
        }
        & > h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.438rem;
          letter-spacing: -0.01em;
        }
      }

      & > .date-time {
        width: 100%;


        & > label {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          width: 100%;
          height: 4.063rem;

          & > input {
            width: 100%;
            height: 2.188rem;
            padding: 0.1rem 0.5rem;
            border: none;
            background: #F2F2F2;

            font-family: 'Nunito', sans-serif;
            font-weight: 300;
            font-size: 1rem;

            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.21em;
          }
        }
      }

    }

    & > footer {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: 100%;
      height:5rem;
      border-top: 1px solid var(--gray);

      & > button {
        padding: 0.594rem 2.188rem;

        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 1.188rem;
        text-align: center;
      }

      & > .save {
        border: none;
        background: var(--green);
        border: 1px solid var(--green);
        color: var(--white);
      }
      & > .cancel {
        background: transparent;
        border: 1px solid var(--green);
        color: var(--green);
      }
    }

  }
`;
