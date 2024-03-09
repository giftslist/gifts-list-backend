import { Injectable } from '@nestjs/common';
import { Prisma, Event as EventModel } from '@prisma/client';
import { PrismaService } from 'src/common/services';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: Prisma.EventCreateInput): Promise<EventModel>{
    const { name, type } = input;
    const date = typeof input.date == 'string'? new Date(Date.parse(input.date)) : input.date;
    return await this.prismaService.event.create({
      data: {
        name: name,
        type: type,
        date: date
      },
    });
  }
}
