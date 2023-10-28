import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PG_CONNECTION, type PgConnection } from '#api/infra/drizzle/drizzle.module';
import { users } from '#api/infra/drizzle/schema';
import { User } from '#api/module/user/domain/user.model';
import type { UserRepositoryInterface } from '#api/module/user/repository/user.repository';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(@Inject(PG_CONNECTION) private readonly conn: PgConnection) {}

  async findByAuthId(authId: Parameters<UserRepositoryInterface['findByAuthId']>[0]): Promise<User | null> {
    const foundUser = (await this.conn.select().from(users).where(eq(users.authId, authId))).at(0);
    if (foundUser === undefined) {
      return null;
    }

    return new User(foundUser);
  }

  async create(user: Parameters<UserRepositoryInterface['create']>[0]): Promise<User> {
    const createdUser = (await this.conn.insert(users).values(user).returning()).at(0);
    if (createdUser === undefined) {
      throw new Error('Failed to create user');
    }

    return new User(createdUser);
  }
}
