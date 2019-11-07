/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: created
// ====================================================

export interface created_userCreated {
  __typename: "User";
  /**
   * The user name
   */
  name: string;
}

export interface created {
  /**
   * The user
   */
  userCreated: created_userCreated | null;
}
