import { Injectable } from '@nestjs/common';
import { EventGift as EventGiftModel, Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/services';

@Injectable()
export class EventGiftRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createMany(params: Prisma.EventGiftCreateManyInput[]): Promise<void> {
    await this.prismaService.eventGift.createMany({
      data: params,
    });
  }

  async create({
    eventId,
    name,
  }: Prisma.EventGiftUncheckedCreateInput): Promise<EventGiftModel> {
    return await this.prismaService.eventGift.create({
      data: {
        eventId,
        name,
      },
    });
  }

  async findFirst(where: Prisma.EventGiftWhereInput): Promise<EventGiftModel> {
    return await this.prismaService.eventGift.findFirst({
      where,
    });
  }

  async findMany(where: Prisma.EventGiftWhereInput): Promise<EventGiftModel[]> {
    return await this.prismaService.eventGift.findMany({
      where,
    });
  }

  async delete(giftID: string): Promise<EventGiftModel> {
    return await this.prismaService.eventGift.delete({
      where: {
        id: giftID,
      },
    });
  }

  async update(updateParams: Prisma.EventGiftUpdateArgs) {
    return await this.prismaService.eventGift.update(updateParams);
  }
}
