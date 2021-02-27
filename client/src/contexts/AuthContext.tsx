import React, { createContext, ReactNode, useState } from 'react';

interface AuthContextData {
  token: string | null;
  GetToken(): void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children?: ReactNode
}

const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState(null);

  function GetToken() {
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, GetToken }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {
  children: null,
};

export default AuthProvider;
