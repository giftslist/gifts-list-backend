import { ApiProperty } from '@nestjs/swagger';
import type { EventGift as EventGiftModel } from '@prisma/client';

export class CreateEventGiftsResponseDTO {
  @ApiProperty({
    example: '4dc737f9-ab91-4bab-b77d-bb32b10ac5f2',
  })
  id: string;

  @ApiProperty({
    example: 'Prato',
  })
  name: string;

  @ApiProperty({
    example: 'Usuário 1',
  })
  gift_giver: string;

  static factory(eventGiftModel: EventGiftModel) {
    return {
      id: eventGiftModel.id,
      name: eventGiftModel.name,
      gift_giver: eventGiftModel.giftGiver,
    };
  }
}
