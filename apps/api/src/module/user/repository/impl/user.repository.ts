import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '#api/infra/prisma/prisma.service';
import { User } from '#api/module/user/domain/user.model';
import type { UserRepositoryInterface } from '#api/module/user/repository/user.repository';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

  async findByAuthId(authId: Parameters<UserRepositoryInterface['findByAuthId']>[0]): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({ where: { authId } });
    if (!user) {
      return null;
    }

    return new User(user);
  }

  async create(user: Parameters<UserRepositoryInterface['create']>[0]): Promise<User> {
    const createdUser = await this.prismaService.user.create({ data: user });

    return new User(createdUser);
  }
}
