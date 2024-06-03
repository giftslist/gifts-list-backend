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
      giftGiver: gift.giftGiver?.name || null,
    }));

    return {
      id,
      name,
      type,
      date,
      gifts: formattedGifts,
    };
  }

  async getEventsForGiftGifter(giftGiverId: string) {
    const eventIds = [];
    const gifts = await this.eventGiftService.getByGiftGiverID(giftGiverId);

    for (const gift of gifts) {
      if (!eventIds.includes(gift.eventId)) {
        eventIds.push(gift.eventId);
      }
    }

    return await this.repository.findMany({
      id: {
        in: eventIds,
      },
    });
  }

  async getEventByIdOrThrowError(eventID: string) {
    const event = await this.repository.findFirst(eventID);

    if (!event) {
      throw new NotFoundException('Evento não encontrado!');
    }

    return event;
  }
}
