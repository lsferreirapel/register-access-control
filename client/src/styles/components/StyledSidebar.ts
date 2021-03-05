import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 8.5rem;
  height: 100vh;

  background: var(--white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media(max-width: 1000px) {
    flex-direction: row;

    z-index: 999;

    width: 100vw;
    max-width: 100vw;
    height: 100%;
    max-height: 7rem;
    padding-top: 1rem;
  }

  & > .exit {
    position: absolute;
    bottom: 1.663rem;
    line-height: 0;
    border: none;
    background: transparent;

    @media(max-width: 1000px) {
      right: 1.663rem;
      bottom: 50%;
      transform: translateY(50%);
    }

    svg {
      color: #5B5B5B;

      transition: all .3s;
    }

    &:hover {
      svg {
        color: var(--green);
        transform: scale(1.2);
      }
    }
  }
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1000px) {
    flex: 1;
    justify-content: center;
    flex-direction: row;
  }
`;

interface SelectorProps {
  active?: boolean;
}

export const Selector = styled(Link)<SelectorProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 7rem;
  height: 5.225rem;
  margin-top: 2.1rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  cursor: pointer;

  @media(max-width: 1000px) {
    border: none;
    margin-right: 5rem;
    margin-top: 0;

    &:after {
      width: 100%;
      height: 3px;
    }

  }

  &:after {
    content: "";
    position: absolute;
    top:-1.10rem;
    left: -0.688rem;

    width: 5px;
    height: 100%;
    border-radius: 30px;
    background: ${(props) => (props.active ? 'var(--green)' : 'transparent')};

    @media(max-width: 1000px) {
      width: 100%;
      height: 4px;
      left: 1px;
      top: 80%;
    }
  }

  span, svg {
    transition: all .2s;
  }
  &:hover {

    span, svg {
      color: var(--green-light) !important;
      /* transform: scale(1.); */
    }
  }
`;

interface SelectorLabelProps {
  active?: boolean;
}

export const SelectorLabel = styled.span<SelectorLabelProps>`
  margin-top: 0.5rem;

  font-size: 1rem;
  font-weight: 300;
  line-height: 20px;
  color: var(--gray);
  color: ${(props) => (props.active ? 'var(--green)' : null)};

  &.dashboard {
    letter-spacing: 0.06em;
  }
`;
