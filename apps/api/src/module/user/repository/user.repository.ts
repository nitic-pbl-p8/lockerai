import type { User } from '#api/module/user/domain/user.model';

export interface UserRepositoryInterface {
  findByAuthId(authId: User['authId']): Promise<User | null>;
  create(user: Omit<User, 'id' | 'fingerprintId' | 'lostAndFoundState' | 'createdAt'>): Promise<User>;
}
