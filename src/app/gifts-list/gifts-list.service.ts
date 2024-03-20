import { Injectable } from '@nestjs/common';
import { GiftsListRepository } from './gifts-list.repository';

import type { CreateListParams } from './interfaces';

@Injectable()
export class GiftsListService {
  constructor(private readonly giftsListRepository: GiftsListRepository) {}

  async create({ eventId, names }: CreateListParams) {
    const giftsList = names.map((name) => ({
      eventId,
      name,
    }));

    await this.giftsListRepository.createMany(giftsList);
    return this.findManyByEventID(eventId);
  }

  async findManyByEventID(eventId: string) {
    return await this.giftsListRepository.findMany({
      eventId,
    });
  }
}
