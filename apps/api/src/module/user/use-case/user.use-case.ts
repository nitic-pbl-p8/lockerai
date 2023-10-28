import type { User } from '#api/module/user/domain/user.model';

export interface UserUseCaseInterface {
  createUser(user: Omit<User, 'id' | 'fingerprintId' | 'lostAndFoundState' | 'createdAt'>): Promise<User>;
  verifyUserPresence(authId: User['authId']): Promise<User | null>;
}
