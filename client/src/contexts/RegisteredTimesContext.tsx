import React, {
  ReactNode, createContext, useState, useEffect,
} from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';

// Set QUERY
interface RegisteredTimes {
  id: string;
  timeRegistered: string;
  user: {
    id: string;
    name: string;
  }
}
interface RegisteredTimesData {
  registeredTimes: RegisteredTimes[]
}
// interface MeData {
//   me: {
//     id: string;
//     username: string;
//     role: {
//       type: string;
//     }
//   }
// }

const GET_ME = gql`
  query {
    me {
      id
      role {
        type
      }
    }
  }
`;

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

const GET_ALL_REGISTERED_TIMES = gql`
  query RegisteredTimes($sort: String) {
    registeredTimes(sort: $sort) {
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
  userId: string | undefined;
  roleType: string | undefined;
  RegisteredTimesByUserIdData: RegisteredTimesData | undefined;
  RegisteredTimesByUserIdIsLoading: boolean;
  RegisteredTimesByUserIdError: string | undefined;
  allRegisteredTimesData: RegisteredTimesData | undefined,
  allRegisteredTimesIsLoading: boolean,
  allRegisteredTimesError: string | undefined,
}

export const RegisteredTimesContext = createContext({} as RegisteredTimesContextData);

interface RegisteredTimesProviderProps {
  children?: ReactNode;
}

const RegisteredTimesProvider: React.FC = ({ children }:RegisteredTimesProviderProps) => {
  const [userId, setUserId] = useState<string>();
  const [roleType, setRoleType] = useState<string>();

  const [
    RegisteredTimesByUserIdIsLoading,
    setRegisteredTimesByUserIdIsLoading,
  ] = useState(false);
  const [
    RegisteredTimesByUserIdData,
    setRegisteredTimesByUserIdData,
  ] = useState<RegisteredTimesData>();
  const [
    RegisteredTimesByUserIdError,
    setRegisteredTimesByUserIdError,
  ] = useState<string>();

  // Get all Data

  const [
    allRegisteredTimesData,
    setAllRegisteredTimesData,
  ] = useState();
  const [
    allRegisteredTimesIsLoading,
    setAllRegisteredTimesIsLoading,
  ] = useState<boolean>(false);
  const [
    allRegisteredTimesError,
    setAllRegisteredTimesError,
  ] = useState<string>();

  const getMe = useQuery(GET_ME);

  // Only administrators can access this query
  const [getAllRegisteredTimes, AllRegisteredTimes] = useLazyQuery(
    GET_ALL_REGISTERED_TIMES,
    { variables: { sort: 'timeRegistered' } },
  );

  const getRegisteredTimesByUserID = useQuery(
    GET_REGISTERED_TIMES_BY_USER_ID,
    { variables: { sort: 'timeRegistered', where: { user: { id: 1 } } } },
  );

  const [executeAgain, setExecuteAgain] = useState<boolean>(true);
  // useEffect(() => {

  // }, []);

  useEffect(() => {
    setUserId(getMe.data?.me.id);
    setRoleType(getMe.data?.me?.role?.type);

    setRegisteredTimesByUserIdData(getRegisteredTimesByUserID.data);
    setRegisteredTimesByUserIdIsLoading(getRegisteredTimesByUserID.loading);
    setRegisteredTimesByUserIdError(getRegisteredTimesByUserID.error?.graphQLErrors[0]?.message);

    if (roleType === 'admin') {
      if (executeAgain) {
        getAllRegisteredTimes();
        setExecuteAgain(false);
      }
      setAllRegisteredTimesData(AllRegisteredTimes.data);
      setAllRegisteredTimesIsLoading(AllRegisteredTimes.loading);
      setAllRegisteredTimesError(AllRegisteredTimes.error?.graphQLErrors[0]?.message);
    } else if (roleType !== 'admin') {
      setAllRegisteredTimesError('Permission denied');
    }
  }, [AllRegisteredTimes, getRegisteredTimesByUserID, getMe]);

  return (
    <RegisteredTimesContext.Provider value={{
      userId,
      roleType,
      RegisteredTimesByUserIdData,
      RegisteredTimesByUserIdIsLoading,
      RegisteredTimesByUserIdError,
      allRegisteredTimesData,
      allRegisteredTimesIsLoading,
      allRegisteredTimesError,
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
