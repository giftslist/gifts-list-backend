import { Prisma, User as UserModel } from '@prisma/client';

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(params: Prisma.UserCreateInput): Promise<UserModel> {
    const { email, name, password } = params;

    return await this.prismaService.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
}
