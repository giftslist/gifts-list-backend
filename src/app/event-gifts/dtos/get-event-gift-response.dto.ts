import { ApiProperty } from '@nestjs/swagger';
import type { EventGift as EventGiftModel } from '@prisma/client';

export class GetEventGiftsResponseDTO {
  @ApiProperty({
    type: Array,
    example: [
      {
        id: '6bd8e43a-2471-4643-9402-0ba8b183ece2',
        name: 'Panela',
      },
      {
        id: '4dc737f9-ab91-4bab-b77d-bb32b10ac5f2',
        name: 'Prato',
      },
    ],
  })
  data: {
    id: string;
    name: string;
    gift_giver: string;
  }[];

  static factory(eventGiftModel: EventGiftModel[]) {
    return eventGiftModel.map((gift) => ({
      id: gift.id,
      name: gift.name,
      gift_giver: gift.giftGiver,
    }));
  }
}
