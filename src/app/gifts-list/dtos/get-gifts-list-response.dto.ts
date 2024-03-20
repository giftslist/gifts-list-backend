import { ApiProperty } from '@nestjs/swagger';
import type { GiftsList as GiftsListModel } from '@prisma/client';

export class GetGiftsListResponseDTO {
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
  giftsList: {
    id: string;
    name: string;
  }[];

  static factory(giftsListModel: GiftsListModel[]) {
    const newList = giftsListModel.map((gift) => ({
      id: gift.id,
      name: gift.name,
    }));

    return newList;
  }
}
