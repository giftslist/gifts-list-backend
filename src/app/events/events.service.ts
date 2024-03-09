import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { CreateEventParams } from './interfaces';

@Injectable()
export class EventsService {
  constructor(private readonly repository: EventsRepository) {}

  async create(param: CreateEventParams) {
    return await this.repository.create({
      ...param,
      host: {
        connect: {
          id: param.hostId
        }
      }
    });
  }
}
