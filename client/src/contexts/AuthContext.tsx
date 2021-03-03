import React, {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { useMutation } from '@apollo/client';
import {
  // Type definitions
  LoginOutput,
  LoginInput,
  // Mutations
  LOGIN,
} from './query';

// Set auth context data types
interface AuthContextData {
  token: string | null | undefined;
  isLoading: boolean;
  gqlError: string | undefined;
  Login(): void;
  logout(): void;
  setIdentifier(identifier: string): void;
  setPassword(password: string): void;
}

// Creates context
export const AuthContext = createContext({} as AuthContextData);

// Defines the type for provider props
interface AuthProviderProps {
  children?: ReactNode
}
// Provider definition
const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  // Login mutation variables
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Create mutation hook
  const [login, { loading, error }] = useMutation<LoginOutput, LoginInput>(
    LOGIN,
    { variables: { input: { identifier, password } } },
  );
  // Hook to store token from login mutation
  const [token, setToken] = useState<string | null | undefined>(localStorage.getItem('@register-access-control/token'));
  // Hook to store the Loading state fromlogin mutation
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Hook to store errors if exists
  const [gqlError, setGqlError] = useState<string>();

  async function Login() {
    try {
      // Login mutation request
      const { data } = await login();

      // Validate if token exists in data response
      if (data?.login?.jwt) {
        // Save token on local storage
        localStorage.setItem('@register-access-control/token', data?.login?.jwt);
        // Set token on hook
        setToken(data?.login.jwt);
      }
    } catch (err) {
      // Set error on hook
      setGqlError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0].message,
      );
    }
  }

  useEffect(() => {
    // Set loading state on hook
    setIsLoading(loading);
    // Set errors on hook
    setGqlError(
      error?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0].message,
    );
  }, [loading, error]);

  function logout() {
    // Remove token from local storage
    localStorage.removeItem('@register-access-control/token');
  }

  // Return provider
  return (
    <AuthContext.Provider value={{
      token,
      gqlError,
      isLoading,
      setIdentifier,
      setPassword,
      Login,
      logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Provider dafault props
AuthProvider.defaultProps = {
  children: null,
};

export default AuthProvider;
