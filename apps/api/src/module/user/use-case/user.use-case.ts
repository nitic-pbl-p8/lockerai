import type { User } from '#api/module/user/domain/user.model';

export interface UserUseCaseInterface {
  findUser(authId: User['authId']): Promise<User | null>;
  findUserByHashedFingerprintId(hashedFingerprintId: NonNullable<User['hashedFingerprintId']>): Promise<User | null>;
  createUser(user: Omit<User, 'id' | 'hashedFingerprintId' | 'lostAndFoundState' | 'createdAt' | 'isOnTheWay'>): Promise<User>;
  relateFingerprintWithUser(authId: User['authId'], hashedFingerprintId: NonNullable<User['hashedFingerprintId']>): Promise<User>;
}
