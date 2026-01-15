import { toBoolean, toNumber, toString } from '@/lib/helpers';

export interface User {
  id: number;
  email: string;
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
}

export const createUser = ({
  id,
  email,
  enabled,
  created_at,
  updated_at,
}: User): User => ({
  id: toNumber(id),
  email: toString(email),
  enabled: toBoolean(enabled),
  created_at: new Date(created_at),
  updated_at: new Date(updated_at),
});
