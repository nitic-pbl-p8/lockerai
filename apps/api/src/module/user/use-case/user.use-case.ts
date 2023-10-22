import type { User } from '#api/module/user/domain/user.model';

export interface UserUseCaseInterface {
  findUser(userId: User['id']): Promise<User | null>;
  createUser(user: Omit<User, 'id' | 'fingerprintId' | 'lostAndFoundState' | 'createdAt'>): Promise<User>;
}
