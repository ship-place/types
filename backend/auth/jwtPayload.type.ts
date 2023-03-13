import { Permission } from '../../common';

export type JwtPayload = {
  email: string;
  sub: number;
  permissions: Permission[];
};
