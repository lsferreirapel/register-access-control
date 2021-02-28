import React, { createContext, ReactNode, useState } from 'react';

import { ApolloError, gql, useMutation } from '@apollo/client';

// Set auth context data types
interface AuthContextData {
  token: string | undefined;
  isLoading: boolean;
  gqlError: ApolloError | undefined;
  // eslint-disable-next-line no-unused-vars
  asyncLogin(identifier: string, password: String): void;
}

// Set login input and output types
interface LoginInput {
  identifier: string;
  password: string
}
interface LoginOutput {
  login: {
    jwt: string;
  }
}

// Set mutation to access login on API
const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;

// Create Auth Context
export const AuthContext = createContext({} as AuthContextData);

// Set AuthProvider props
interface AuthProviderProps {
  children?: ReactNode
}
const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  // Create hook states
  const [token, setToken] = useState<string>();
  const [gqlError, setGqlError] = useState<ApolloError>();
  const [isLoading, setIsLoading] = useState(false);

  // Create mutation hook
  const [login, { error, loading, data }] = useMutation<
    LoginOutput,
    {input: LoginInput}
  >(LOGIN);

  async function asyncLogin(identifier: string, password: string) {
    // Send HTTP request to GraphQL uri
    await login({ variables: { input: { identifier, password } } });

    // Set states with mutation response
    setToken(data?.login.jwt);
    setIsLoading(loading);
    setGqlError(error);
  }

  // Return provider
  return (
    <AuthContext.Provider value={{
      token, gqlError, isLoading, asyncLogin,
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
