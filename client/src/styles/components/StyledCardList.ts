import { CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 7vh;
  left: calc(50% + 5rem);
  transform: translateX(-50%);

  width: 65vw;
  min-width: 61rem;
  margin-top: 5.5rem;

  @media(max-width: 1000px) {
    width: 90vw;
    min-width: 600px;
    left: 50%;
  }
`;
export const Loading = styled(CircularProgress)`
  position: absolute;
  top: 45vh;
  left: calc(50% + 2rem);
`;
export const Error = styled(Alert)`
  position: absolute;
  top: 13vh;
  left: calc(50% + 5rem);
  transform: translateX(-50%);

  width: 65vw;
  min-width: 61rem;

  @media(max-width: 1000px) {
    top: 8rem;
    width: 90vw;
    min-width: 90vw;
    left: 50%;
  }
`;

export const CardListHead = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 7.25rem;
  margin-bottom: 30px;
  width: 100%;

  @media(max-width: 650px) {
    display: none;
  }
  & > h3 {
  font-size: 1.563rem;
  font-weight: 400;

    &:nth-child(2) {
      position: absolute;
      left: 50%;
      transform: translateX(-100%);
    }
  }
`;
export const CardListBody = styled.div``;
