import React, {
  ReactNode, createContext, useState, useEffect,
} from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';

// Import queries
import {
  // Type definitions
  GetRegisteredTimesOutput,
  getMeOutput,
  // Queries
  GET_ME,
  GET_ALL_REGISTERED_TIMES,
  GET_REGISTERED_TIMES_BY_USER_ID,
} from './query';

// Defines the type for values stored in context
interface RegisteredTimesContextData {
  userId: string | undefined;
  roleType: string | undefined;
  RegisteredTimesByUserIdData: GetRegisteredTimesOutput | undefined;
  RegisteredTimesByUserIdIsLoading: boolean;
  RegisteredTimesByUserIdError: string | undefined;
  allRegisteredTimesData: GetRegisteredTimesOutput | undefined,
  allRegisteredTimesIsLoading: boolean,
  allRegisteredTimesError: string | undefined,
}

// Creates context
export const RegisteredTimesContext = createContext({} as RegisteredTimesContextData);

// Defines the type for provider props
interface RegisteredTimesProviderProps {
  children?: ReactNode;
}
// Provider definition
const RegisteredTimesProvider: React.FC = ({ children }:RegisteredTimesProviderProps) => {
  // Hook to call the GET_ME Query
  const getMe = useQuery<getMeOutput>(GET_ME);
  // Hook to store user ID from getMe Query
  const [userId, setUserId] = useState<string>();
  // Hook to store user role type from getMe Query
  const [roleType, setRoleType] = useState<string>();

  // Hook to call the GET_REGISTERED_TIMES_BY_USER_ID Query
  // Get ID from userID
  const getRegisteredTimesByUserID = useQuery<GetRegisteredTimesOutput>(
    GET_REGISTERED_TIMES_BY_USER_ID,
    { variables: { sort: 'timeRegistered', where: { user: { id: 1 } } } },
  );
  // Hook to store the getRegisteredTimesByUserID Query response
  const [
    RegisteredTimesByUserIdData,
    setRegisteredTimesByUserIdData,
  ] = useState<GetRegisteredTimesOutput>();
  // Hook to store the Loading state from getRegisteredTimesByUserID Query
  const [
    RegisteredTimesByUserIdIsLoading,
    setRegisteredTimesByUserIdIsLoading,
  ] = useState(true);
  // Hook to store errors if exists
  const [
    RegisteredTimesByUserIdError,
    setRegisteredTimesByUserIdError,
  ] = useState<string>();

  // Hook to call the GET_ALL_REGISTERED_TIMES Lazy Query
  // Only administrators can access this query
  const [getAllRegisteredTimes, AllRegisteredTimes] = useLazyQuery<GetRegisteredTimesOutput>(
    GET_ALL_REGISTERED_TIMES,
    { variables: { sort: 'timeRegistered' } },
  );
  // Hook to store the getAllRegisteredTimes Query response
  const [
    allRegisteredTimesData,
    setAllRegisteredTimesData,
  ] = useState<GetRegisteredTimesOutput>();
  // Hook to store the Loading state from getAllRegisteredTimes Query
  const [
    allRegisteredTimesIsLoading,
    setAllRegisteredTimesIsLoading,
  ] = useState<boolean>(true);
  // Hook to store errors if exists
  const [
    allRegisteredTimesError,
    setAllRegisteredTimesError,
  ] = useState<string>();

  // Toggles between execute a lazy query and not execute
  const [execute, setExecute] = useState<boolean>(true);

  useEffect(() => {
    // Set data on hooks with getMe query response
    setUserId(getMe.data?.me.id);
    setRoleType(getMe.data?.me?.role?.type);

    // Set data on hooks with getRegisteredTimesByUserID query response
    setRegisteredTimesByUserIdData(getRegisteredTimesByUserID.data);
    setRegisteredTimesByUserIdIsLoading(getRegisteredTimesByUserID.loading);
    setRegisteredTimesByUserIdError(getRegisteredTimesByUserID.error?.graphQLErrors[0]?.message);

    // If user's a admin role type execute getAllRegisteredTimes lazy query
    //  and set data on hooks.
    // Else set allRegisteredTimesError to 'Permission denied'
    if (roleType === 'admin') {
      if (execute) {
        getAllRegisteredTimes();
        setExecute(false);
      }
      setAllRegisteredTimesData(AllRegisteredTimes.data);
      setAllRegisteredTimesIsLoading(AllRegisteredTimes.loading);
      setAllRegisteredTimesError(AllRegisteredTimes.error?.graphQLErrors[0]?.message);
    } else if (roleType !== 'admin') {
      setAllRegisteredTimesIsLoading(false);
      setAllRegisteredTimesError('Permission denied');
    }
  }, [AllRegisteredTimes, getRegisteredTimesByUserID, getMe]);

  // Provider return
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

// Provider default props
RegisteredTimesProvider.defaultProps = {
  children: null,
};

export default RegisteredTimesProvider;
