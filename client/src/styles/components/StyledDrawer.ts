import { Drawer } from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import styled from 'styled-components';

export const Container = styled(Drawer)`
  .MuiDrawer-paper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-width: 25rem;
  }
`;
export const Header = styled.header`
  width: 100%;
  height:5rem;
  border-bottom: 1px solid var(--gray);
  padding: 1rem 0 0 1.75rem;

  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
  color: var(--text);
`;
export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 3.25rem;
  width: 100%;

  & > section {
    flex: 1;
    width: 18.75rem;
  }
`;
export const Title = styled.div`

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

`;
export const DateTime = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 4.063rem;


`;
export const DateTimeInput = styled(KeyboardDateTimePicker)`
  cursor: pointer;
  width: 100%;
  min-height: 3.75rem;

  & > label {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1rem;
    color: var(--text);
    cursor: pointer;
  }

  & > .MuiInputBase-root {
    width: 100%;
    height: 2.188rem;
    padding: 0.1rem 0.5rem;
    border: none;
    background: #F2F2F2;
    margin-top: 2rem;

    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    font-size: 1rem;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.21em;

    &:before, &:after {
      content: none;
    }

    input, div {
      cursor: pointer;
    }
  }

`;
export const Footer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height:5rem;
  border-top: 1px solid var(--gray);
`;
