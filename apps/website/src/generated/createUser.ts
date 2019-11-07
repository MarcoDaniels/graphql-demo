/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_user_create {
  __typename: "User";
  /**
   * The user name
   */
  name: string;
}

export interface createUser_user {
  __typename: "UserMutation";
  /**
   * The user
   */
  create: createUser_user_create | null;
}

export interface createUser {
  /**
   * The user base mutation
   */
  user: createUser_user | null;
}

export interface createUserVariables {
  input: UserInput;
}
