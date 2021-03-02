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
  query me() : getMeOutput {
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
export const GET_REGISTERED_TIMES_BY_USER_ID = gql`
  query RegisteredTimes($sort: String, $where: JSON): GetRegisteredTimesOutput {
    registeredTimes(sort: "timeRegistered", where: $where) {
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
    registeredTimes(sort: "timeRegistered") {
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