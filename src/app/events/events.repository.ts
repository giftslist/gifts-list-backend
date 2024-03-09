import { Injectable } from '@nestjs/common';
import { Prisma, Event as EventModel } from '@prisma/client';
import { PrismaService } from 'src/common/services';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: Prisma.EventCreateInput): Promise<EventModel>{
    return await this.prismaService.event.create({
      data: {
        name: input.name,
        type: input.type,
        date: input.date
      },
    });
  }
}
