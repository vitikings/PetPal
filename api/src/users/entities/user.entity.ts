import { Role } from "../../auth/role.enum";

export interface User {
  id: number;
  username: string;
  password: string;
  roles: Role[];
}