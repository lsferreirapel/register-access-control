import React, {
  ReactNode, createContext, useState, useEffect,
} from 'react';
import { gql, useQuery } from '@apollo/client';

// Set QUERY
interface RegisteredTimesByUserIdDataType {
  id: string;
  timeRegistered: string;
  user: {
    id: string;
    name: string;
  }
}
const GET_REGISTERED_TIMES_BY_USER_ID = gql`
  query RegisteredTimes($sort: String, $where: JSON) {
    registeredTimes(sort: $sort, where: $where) {
      id
      timeRegistered
      user {
        id
        name
      }
    }
  }
`;

interface RegisteredTimesContextData {
  helloWorld(): void;
  RegisteredTimesByUserIdIsLoading: boolean;
  RegisteredTimesByUserIdData: RegisteredTimesByUserIdDataType | undefined;
  RegisteredTimesByUserIdError: string | undefined;
}

export const RegisteredTimesContext = createContext({} as RegisteredTimesContextData);

interface RegisteredTimesProviderProps {
  children?: ReactNode;
}

const RegisteredTimesProvider: React.FC = ({ children }:RegisteredTimesProviderProps) => {
  const [
    RegisteredTimesByUserIdIsLoading,
    setRegisteredTimesByUserIdIsLoading,
  ] = useState(false);
  const [
    RegisteredTimesByUserIdData,
    setRegisteredTimesByUserIdData,
  ] = useState<RegisteredTimesByUserIdDataType>();
  const [
    RegisteredTimesByUserIdError,
    setRegisteredTimesByUserIdError,
  ] = useState<string>();

  const getRegisteredTimesByUserID = useQuery(
    GET_REGISTERED_TIMES_BY_USER_ID,
    { variables: { sort: 'timeRegistered', where: { user: { id: 1 } } } },
  );

  useEffect(() => {
    setRegisteredTimesByUserIdData(getRegisteredTimesByUserID.data);
    setRegisteredTimesByUserIdIsLoading(getRegisteredTimesByUserID.loading);
    setRegisteredTimesByUserIdError(getRegisteredTimesByUserID.error?.graphQLErrors[0].message);

    console.log('data: ', getRegisteredTimesByUserID.data);
    console.log('isLoading: ', getRegisteredTimesByUserID.loading);
  }, [getRegisteredTimesByUserID]);

  function helloWorld() {
    alert('Hello world!');
  }

  return (
    <RegisteredTimesContext.Provider value={{
      helloWorld,
      RegisteredTimesByUserIdIsLoading,
      RegisteredTimesByUserIdData,
      RegisteredTimesByUserIdError,
    }}
    >
      {children}
    </RegisteredTimesContext.Provider>
  );
};

RegisteredTimesProvider.defaultProps = {
  children: null,
};

export default RegisteredTimesProvider;
