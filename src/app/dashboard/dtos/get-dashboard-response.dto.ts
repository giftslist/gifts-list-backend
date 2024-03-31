import { ApiProperty } from '@nestjs/swagger';

import { snakeKeys } from 'src/common/utils';
import type { GetDashboardByUserIDResponse } from '../interfaces';

export class GetDashboardResponseDTO {
  @ApiProperty({
    example: {
      id: '5514a9c9-efee-46b5-bc7f-e7c423cffdf7',
      name: 'Agata',
      email: 'teste@gmail.com',
    },
  })
  user: Record<string, string>;

  @ApiProperty({
    example: [
      {
        id: '0c0c3bf7-28a0-4fad-afc7-72cb2f8c0005',
        name: 'Chá de Bebê',
        type: 'CHA_DE_BEBE',
        date: '2024-03-22T00:00:00.000Z',
        gifts: [
          {
            id: '35375376-d3ce-49c1-9bd1-c9cf7cb5514c',
            name: 'Panela',
            gift_giver: 'Agata',
          },
        ],
      },
    ],
  })
  events: Record<string, string>[];

  static factory(dashboardModel: GetDashboardByUserIDResponse) {
    return snakeKeys(dashboardModel);
  }
}
