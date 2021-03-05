import React, {
  ReactNode, createContext, useState, useEffect,
} from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';

// Import queries
import {
  // Type definitions
  GetRegisteredTimesOutput,
  getMeOutput,
  CreateRegisteredTimeInput,
  CreateRegisteredTimeOutput,
  // Queries
  GET_ME,
  GET_ALL_REGISTERED_TIMES,
  GET_REGISTERED_TIMES_BY_USER_ID,
  CREATE_REGISTERED_TIME,
} from './query';

// Defines the type for values stored in context
interface RegisteredTimesContextData {
  userId: string;
  roleType: string;
  username: string;
  RegisteredTimesByUserIdData: GetRegisteredTimesOutput | undefined;
  RegisteredTimesByUserIdIsLoading: boolean;
  RegisteredTimesByUserIdError: string;
  allRegisteredTimesData: GetRegisteredTimesOutput | undefined;
  allRegisteredTimesIsLoading: boolean;
  allRegisteredTimesError: string;
  createRegisteredTimeData: CreateRegisteredTimeOutput | undefined | null;
  createRegisteredTimeIsLoading: boolean;
  createRegisteredTimeError: string;
  timeRegistered: string;
  setTimeRegistered(timeRegistered: string): void;
  CreateRegisteredTime(): void;
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
  const [userId, setUserId] = useState<string>('');
  // Hook to store user name from getMe Query
  const [username, setUsername] = useState<string>('');
  // Hook to store user role type from getMe Query
  const [roleType, setRoleType] = useState<string>('');

  // Hook to call the GET_REGISTERED_TIMES_BY_USER_ID Query
  // Get ID from userID
  const getRegisteredTimesByUserID = useQuery<GetRegisteredTimesOutput>(
    GET_REGISTERED_TIMES_BY_USER_ID,
    { variables: { sort: 'timeRegistered', where: { user: { id: userId } } } },
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
  ] = useState<boolean>(true);
  // Hook to store errors if exists
  const [
    RegisteredTimesByUserIdError,
    setRegisteredTimesByUserIdError,
  ] = useState<string>('');

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
  ] = useState<string>('');

  const [timeRegistered, setTimeRegistered] = useState<string>(new Date().toISOString());

  const [createRegisteredTime, { loading }] = useMutation<
    CreateRegisteredTimeOutput,
    CreateRegisteredTimeInput
  >(
    CREATE_REGISTERED_TIME,
    {
      variables: {
        input: {
          data: {
            timeRegistered,
            user: userId,
          },
        },
      },
    },
  );

  const [
    createRegisteredTimeData,
    setCreateRegisteredTimeData,
  ] = useState<CreateRegisteredTimeOutput | null>();
  const [
    createRegisteredTimeIsLoading,
    setCreateRegisteredTimeIsLoading,
  ] = useState<boolean>(false);
  const [
    createRegisteredTimeError,
    setCreateRegisteredTimeError,
  ] = useState<string>('');

  async function CreateRegisteredTime() {
    try {
      const { data } = await createRegisteredTime();
      setCreateRegisteredTimeData(data);
      document.location.reload();
    } catch (error) {
      setCreateRegisteredTimeError(error?.message);
    }
  }
  useEffect(() => {
    setCreateRegisteredTimeIsLoading(loading);
  }, [loading]);

  // Toggles between execute a lazy query and not execute
  const [execute, setExecute] = useState<boolean>(true);

  useEffect(() => {
    // Set data on hooks with getMe query response
    setUserId(getMe.data?.me?.id ?? '');
    setRoleType(getMe.data?.me?.role?.type ?? '');

    // Set data on hooks with getRegisteredTimesByUserID query response
    setRegisteredTimesByUserIdData(getRegisteredTimesByUserID.data);
    setUsername(getRegisteredTimesByUserID.data?.registeredTimes[0]?.user?.name ?? '');
    setRegisteredTimesByUserIdIsLoading(getRegisteredTimesByUserID.loading);
    setRegisteredTimesByUserIdError(getRegisteredTimesByUserID.error?.graphQLErrors[0]?.message ?? '');

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
      setAllRegisteredTimesError(AllRegisteredTimes.error?.graphQLErrors[0]?.message ?? '');
    } else if (roleType !== 'admin') {
      setAllRegisteredTimesIsLoading(false);
      setAllRegisteredTimesError('Only administrators can access the dashboard');
    }
  }, [AllRegisteredTimes, getRegisteredTimesByUserID, getMe]);

  // Provider return
  return (
    <RegisteredTimesContext.Provider value={{
      userId,
      roleType,
      username,
      RegisteredTimesByUserIdData,
      RegisteredTimesByUserIdIsLoading,
      RegisteredTimesByUserIdError,
      allRegisteredTimesData,
      allRegisteredTimesIsLoading,
      allRegisteredTimesError,
      createRegisteredTimeData,
      createRegisteredTimeIsLoading,
      createRegisteredTimeError,
      timeRegistered,
      setTimeRegistered,
      CreateRegisteredTime,
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
