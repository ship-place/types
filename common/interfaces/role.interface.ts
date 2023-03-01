import { Permission } from '../enums';

export interface IRole {
  id: number;
  name: string;
  permissions: Permission[];
}
