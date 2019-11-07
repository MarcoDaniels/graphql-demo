/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: listUsers
// ====================================================

export interface listUsers_user_list {
  __typename: "User";
  /**
   * The user name
   */
  name: string;
  /**
   * The user role
   */
  role: string;
}

export interface listUsers_user {
  __typename: "UserQuery";
  /**
   * The user
   */
  list: (listUsers_user_list | null)[] | null;
}

export interface listUsers {
  /**
   * The user base query
   */
  user: listUsers_user | null;
}
