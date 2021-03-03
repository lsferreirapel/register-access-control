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
      role {
        type
      }
    }
  }
`;
/* --------------------- */

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
/* --------------------- */
