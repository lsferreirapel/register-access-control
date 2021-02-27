import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: var(--background-login);

  .brand {
    width: 25rem;
    height: 23rem;
    margin-left: 10rem;

    /* Mobile */
    @media(max-width: 1000px) {
      width: 15rem;
      height: 13rem;
      margin-left: 0;
    }
  }


`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;

  overflow: hidden;

  /* Mobile */
  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;

    max-height: 750px;
    min-height: 400px;

    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const LoginBox = styled.div`
  position: relative;
  width: 54rem;
  height: 44.5rem;
  margin-right: -12.3rem;

  .green-stain {
    position: absolute;

    width: 54rem;
    height: 44.5rem;

    @media(max-width: 1000px) {
      width: 44rem;
      height: 34.5rem;
      margin-right: -2rem;
      margin-top: 8rem;
    }
  }

  @media(max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 44rem;
    height: 34.5rem;
    margin-right: -2rem;
    margin-top: 9rem;
  }
`;
export const LoginForm = styled.form`
  position: absolute;
  top: 9.6rem;
  left: 5.3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 32rem;
  height: 26rem;

  border-radius: 40px;

  padding: 1.9rem 2.1rem;

  background: var(--white);

  @media(max-width: 1000px) {
    top: inherit;
    left: inherit;

    width: 22rem;
    height: 21rem;
  }

  button {
    width: 9rem;
    height: 4rem;
    margin-top: 0.5rem;

    border: none;
    background: var(--green);

    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: var(--white);
    font-size: 1.5rem;

    transition: background 0.3s;
    &:hover {
      background: #00ad4a;
    }
  }
`;

const InputField = styled.label`
  display: flex;
  flex-direction: column;

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  color: black;
  margin-top: 0.5rem;

  input {
    height: 4.125rem;
    padding: 0 1rem;
    border: none;
    background: #F2F2F2;
    margin-top: 0.5rem;
  }
`;

export const LoginField = styled(InputField)``;
export const PasswordField = styled(InputField)``;
