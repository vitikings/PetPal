import { Role } from '../../auth/role.enum';

export interface UserDTO {
  id: number;
  username: string;
  roles: Role[];
}
