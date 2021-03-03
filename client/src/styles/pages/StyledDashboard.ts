import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
export const Loading = styled(CircularProgress)`
  position: absolute;
  top: 45vh;
  left: calc(50% + 2rem);

  svg {
    color: var(--green);
  }
`;

export const CardList = styled.div`
  position: absolute;
  top: 13vh;
  left: calc(50% + 5rem);
  transform: translateX(-50%);

  width: 65vw;
  min-width: 61rem;

  @media(max-width: 1000px) {
    width: 90vw;
    min-width: 600px;
    left: 50%;
  }

  /* @media(max-width: 650px) {
    width: 90vw;
    min-width: 600px;
    left: 50%;
  } */
`;
export const CardListHead = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 7.25rem;
  margin-bottom: 30px;
  width: 100%;

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
