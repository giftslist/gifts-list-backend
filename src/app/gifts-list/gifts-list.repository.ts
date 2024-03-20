import { Injectable } from '@nestjs/common';
import { GiftsList as GiftsListModel, Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/services';

@Injectable()
export class GiftsListRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createMany(params: Prisma.GiftsListCreateManyInput[]): Promise<void> {
    await this.prismaService.giftsList.createMany({
      data: params,
    });
  }

  async findMany(where: Prisma.GiftsListWhereInput): Promise<GiftsListModel[]> {
    return await this.prismaService.giftsList.findMany({
      where,
    });
  }
}
