import type { User } from '#api/module/user/domain/user.model';

export interface UserRepositoryInterface {
  find(userId: User['id']): Promise<User | null>;
  create(user: Omit<User, 'id' | 'fingerprintId' | 'lostAndFoundState' | 'createdAt'>): Promise<User>;
}
