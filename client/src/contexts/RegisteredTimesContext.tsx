import React, { ReactNode, createContext } from 'react';

interface RegisteredTimesContextData {
  helloWorld(): void;
}

export const RegisteredTimesContext = createContext({} as RegisteredTimesContextData);

interface RegisteredTimesProviderProps {
  children?: ReactNode;
}

const RegisteredTimesProvider: React.FC = ({ children }:RegisteredTimesProviderProps) => {
  function helloWorld() {
    alert('Hello world!');
  }

  return (
    <RegisteredTimesContext.Provider value={{ helloWorld }}>
      {children}
    </RegisteredTimesContext.Provider>
  );
};

RegisteredTimesProvider.defaultProps = {
  children: null,
};

export default RegisteredTimesProvider;
