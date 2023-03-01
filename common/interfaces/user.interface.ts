import { Permission } from '../enums';

export interface IUser {
  id: number;
  email: string;
  password: string;
  currentJwtRefreshTokenHashed: string;
  activationToken: string;
  isActive: boolean;
  permissions: Permission[];
}
