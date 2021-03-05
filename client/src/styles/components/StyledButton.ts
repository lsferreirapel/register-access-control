import styled from 'styled-components';

interface ButtonProps {
  size: string;
}
const Button = styled.button<ButtonProps>`
  padding: 0.594rem 2.188rem;
  margin: 0.5rem;
  margin-left: 0;

  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: ${(props) => ((props.size === 'small') ? '1.188rem' : '1.5rem')};

  text-align: center;
`;

export const StandardButton = styled(Button)`
  border: 1px solid var(--green);
  background: var(--green);
  color: var(--white);

  transition: background 0.3s;
  transition: border 0.3s;

  &:hover {
    background: #00ad4a;
  }

  &:disabled {
    border: none;
    background: var(--gray);
  }
`;

export const OutlinedButton = styled(Button)`
  border: 1px solid var(--green);
  background: transparent;
  color: var(--green);

  transition: background 0.3s;
  transition: border-color 0.3s;
  transition: color 0.3s;

  &:hover {
    border-color: var(--green-light);
    background: var(--green-light);
    color: var(--white);
  }

  &:disabled {
    background: var(--gray);
    border-color: var(--gray);
    color: var(--white);
  }

`;
