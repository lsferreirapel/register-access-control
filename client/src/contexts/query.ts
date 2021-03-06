import { gql } from '@apollo/client';

/* ======== RegisteredTimesCotext.tsx ======== */
// QUERIES

// GET ME
// Type definitions
export interface getMeOutput {
  me: {
    id: string;
    username: string;
    role: {
      type: string;
    }
  }
}
// Query
export const GET_ME = gql`
  query {
    me {
      id
      username
      role {
        type
      }
    }
  }
`;
/* --------------------- */
// QUERIES

// GET REGISTERED TIMES
// Type definitions
interface RegisteredTimes {
  id: string;
  timeRegistered: string;
  user: {
    id: string;
    name: string;
  }
}
export interface GetRegisteredTimesOutput {
  registeredTimes: RegisteredTimes[]
}
// Query: get by user id
// "timeRegistered"
export const GET_REGISTERED_TIMES_BY_USER_ID = gql`
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
// Query: get all
export const GET_ALL_REGISTERED_TIMES = gql`
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

// MUTATIONS

// Type defenitions
export interface CreateRegisteredTimeInput {
  input: {
    data: {
      // USER ID
      user: string;
      // DATE TO STRING
      timeRegistered: string;
    }
  }
}
export interface CreateRegisteredTimeOutput {
  registeredTime: {
    timeRegistered: string;
    user: {
      id: string;
      name: string;
    }
  }
}
// Mutation: createRegisteredTime
export const CREATE_REGISTERED_TIME = gql`
  mutation createRegisteredTime($input: createRegisteredTimeInput!) {
    createRegisteredTime(input: $input) {
      registeredTime {
        timeRegistered
        user {
          id
          name
        }
      }
    }
  }
`;

/* --------------------- */

/* ======== AuthContext.tsx ======== */
// MUTATIONS

// Type defenitions
export interface LoginInput {
  input: {
    identifier: string;
    password: string;
  }
}
export interface LoginOutput {
  login: {
    jwt: string;
  }
}
// Mutation: login
export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;
