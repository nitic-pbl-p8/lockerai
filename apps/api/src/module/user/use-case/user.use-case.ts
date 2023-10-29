import type { User } from '#api/module/user/domain/user.model';

export interface UserUseCaseInterface {
  findUser(authId: User['authId']): Promise<User | null>;
  createUser(user: Omit<User, 'id' | 'fingerprintId' | 'lostAndFoundState' | 'createdAt'>): Promise<User>;
}
