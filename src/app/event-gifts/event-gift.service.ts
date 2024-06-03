import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { EventGiftRepository } from './event-gift.repository';
import type {
  CreateGiftParams,
  CreateGiftsParams,
  SelectGiftParams,
} from './interfaces';

@Injectable()
export class EventGiftService {
  constructor(private readonly eventGiftRepository: EventGiftRepository) {}

  async create({ eventId, name }: CreateGiftParams) {
    return await this.eventGiftRepository.create({
      eventId,
      name,
    });
  }

  async createMany({ eventId, names }: CreateGiftsParams) {
    const gifts = names.map((name) => ({
      eventId,
      name,
    }));

    await this.eventGiftRepository.createMany(gifts);
    return this.findManyByEventID(eventId);
  }

  async findManyByEventID(eventId: string) {
    return await this.eventGiftRepository.findMany({
      eventId,
    });
  }

  async getByGiftGiverID(giftGiverId: string) {
    return await this.eventGiftRepository.findMany({
      giftGiverId,
    });
  }

  async delete(giftID: string) {
    await this.getEventGiftOrThrowError(giftID);
    return await this.eventGiftRepository.delete(giftID);
  }

  async selectGift({ giftID, giftGiverId }: SelectGiftParams) {
    const eventGift = await this.getEventGiftOrThrowError(giftID);
    const alreadyHaveGiver = !!eventGift.giftGiverId?.length;

    if (alreadyHaveGiver) {
      throw new BadRequestException(
        'O presente já foi selecionado por outra pessoa!',
      );
    }

    return await this.eventGiftRepository.update({
      where: {
        id: giftID,
      },
      data: {
        giftGiverId,
      },
    });
  }

  async getEventGiftOrThrowError(giftID: string) {
    const existGift = await this.eventGiftRepository.findFirst({
      id: giftID,
    });

    if (!existGift) {
      throw new NotFoundException('Presente não encontrado');
    }

    return existGift;
  }
}
