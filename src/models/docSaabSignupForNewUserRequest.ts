/**
 * DoctorSabLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface DocSaabSignupForNewUserRequest {
  firstName: string;
  midName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
  roles: string[];
}

export const docSaabSignupForNewUserRequestSchema: Schema<DocSaabSignupForNewUserRequest> = object(
  {
    firstName: ['firstName', string()],
    midName: ['midName', string()],
    lastName: ['lastName', string()],
    contactNumber: ['contactNumber', string()],
    email: ['email', string()],
    password: ['password', string()],
    roles: ['roles', array(string())],
  }
);
