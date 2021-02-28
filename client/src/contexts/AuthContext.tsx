import React, { createContext, ReactNode, useState } from 'react';

import { gql, useMutation } from '@apollo/client';

// Set auth context data types
interface AuthContextData {
  token: string | undefined;
  isLoading: boolean;
  gqlError: string | undefined;
  // eslint-disable-next-line no-unused-vars
  asyncLogin(identifier: string, password: string): void;
}

// Set login input and output types
// interface LoginInput {
//   identifier: string;
//   password: string
// }
// interface LoginOutput {
//   login: {
//     jwt: string;
//   }
// }

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
  const [gqlError, setGqlError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  // Create mutation hook
  const [login, { loading }] = useMutation(LOGIN);

  async function asyncLogin(identifier: string, password: string) {
    // Send HTTP request to GraphQL uri
    try {
      const { data } = await login({ variables: { input: { identifier, password } } });
      // Set states with mutation response

      setToken(data?.login.jwt);
      setIsLoading(loading);
    } catch (err) {
      setGqlError(
        err?.graphQLErrors[0]?.extensions?.exception?.data?.data[0]?.messages[0].message,
      );
    }
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
