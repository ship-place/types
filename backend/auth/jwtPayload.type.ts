import { Permission } from 'src/common/@types/enums';

export type JwtPayload = {
  email: string;
  sub: number;
  permissions: Permission[];
};
