/**
 * DoctorSabLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, nullable, object, Schema, string } from '../schema';

export interface User {
  id: string;
  firstName: string;
  midName: string;
  lastName: string;
  username: string | null;
  contactNumber: string;
  email: string;
  lastLogin: string | null;
  status: boolean;
  onlineStatus: boolean;
  createdAt: string;
  updatedAt: string;
  doctor: string | null;
}

export const userSchema: Schema<User> = object({
  id: ['id', string()],
  firstName: ['firstName', string()],
  midName: ['midName', string()],
  lastName: ['lastName', string()],
  username: ['username', nullable(string())],
  contactNumber: ['contactNumber', string()],
  email: ['email', string()],
  lastLogin: ['lastLogin', nullable(string())],
  status: ['status', boolean()],
  onlineStatus: ['onlineStatus', boolean()],
  createdAt: ['createdAt', string()],
  updatedAt: ['updatedAt', string()],
  doctor: ['doctor', nullable(string())],
});
