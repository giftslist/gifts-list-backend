import { Injectable, NotFoundException } from '@nestjs/common';
import { EventGiftService } from '../event-gifts/event-gift.service';
import { UsersService } from '../users/users.service';
import { EventsRepository } from './events.repository';

import { CreateEventParams, EventWithGifts } from './interfaces';

@Injectable()
export class EventsService {
  constructor(
    private readonly repository: EventsRepository,
    private readonly userService: UsersService,
    private readonly eventGiftService: EventGiftService,
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

  async getEventByUserID(userID: string) {
    return await this.repository.findMany({
      hostId: userID,
    });
  }

  async getEventAndGiftsByID(eventID: string): Promise<EventWithGifts> {
    const { id, name, type, date } =
      await this.getEventByIdOrThrowError(eventID);

    const eventGifts = await this.eventGiftService.findManyByEventID(eventID);

    const formattedGifts = eventGifts.map((gift) => ({
      id: gift.id,
      name: gift.name,
      giftGiver: gift.giftGiver,
    }));

    return {
      id,
      name,
      type,
      date,
      gifts: formattedGifts,
    };
  }

  async getEventByIdOrThrowError(eventID: string) {
    const event = await this.repository.findFirst(eventID);

    if (!event) {
      throw new NotFoundException('Evento não encontrado!');
    }

    return event;
  }
}
