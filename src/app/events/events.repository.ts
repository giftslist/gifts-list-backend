import { Injectable } from '@nestjs/common';
import { Event as EventModel, Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/services';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: Prisma.EventCreateInput): Promise<EventModel> {
    const { name, type, host } = input;
    const date =
      typeof input.date == 'string'
        ? new Date(Date.parse(input.date))
        : input.date;
    return await this.prismaService.event.create({
      data: {
        name: name,
        type: type,
        date: date,
        host: {
          connect: { id: host.connect.id },
        },
      },
    });
  }

  async findMany(where: Prisma.EventWhereInput): Promise<EventModel[]> {
    return await this.prismaService.event.findMany({
      where,
    });
  }

  async findFirst(eventID: string): Promise<EventModel> {
    return await this.prismaService.event.findFirst({
      where: {
        id: eventID,
      },
    });
  }
}
