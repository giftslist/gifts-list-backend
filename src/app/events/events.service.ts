import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { EventsRepository } from './events.repository';
import { CreateEventParams } from './interfaces';

@Injectable()
export class EventsService {
  constructor(
    private readonly repository: EventsRepository,
    private readonly userService: UsersService,
  ) {}

  async create(param: CreateEventParams) {
    const user = await this.userService.getById(param.hostId);

    return await this.repository.create({
      ...param,
      host: {
        connect: {
          id: user.id,
        },
      },
    });
  }
}
