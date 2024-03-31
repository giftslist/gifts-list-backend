import { ApiProperty } from '@nestjs/swagger';

import { snakeKeys } from 'src/common/utils';
import type { EventWithGifts } from '../interfaces';

export class GetEventResponseDTO {
  @ApiProperty({
    example: '0c0c3bf7-28a0-4fad-afc7-72cb2f8c0005',
  })
  id: string;

  @ApiProperty({
    example: 'Chá de Bebê',
  })
  name: string;

  @ApiProperty({
    example: 'CHA_DE_BEBE',
  })
  type: string;

  @ApiProperty({
    example: '2024-03-22T00:00:00.000Z',
  })
  date: string;

  @ApiProperty({
    example: [
      {
        id: '35375376-d3ce-49c1-9bd1-c9cf7cb5514c',
        name: 'Panela',
        gift_giver: 'Agata',
      },
    ],
  })
  gifts: Record<string, string>[];

  static factory(eventWithGifts: EventWithGifts) {
    return snakeKeys(eventWithGifts);
  }
}
