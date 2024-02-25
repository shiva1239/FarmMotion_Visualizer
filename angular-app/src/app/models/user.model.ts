import { Role } from "./role.model";

export class User implements User {
    id?: number; // Set default value for id
    name?: string = ''; // Set default value for name
    userName?: string = '';
    email?: string = '';
    password?: string = '';
    roles?: Role[] = []; // Initialize roles to an empty array
  }
  