import { ApiProperty } from '@nestjs/swagger';
import { Event as EventModel } from '@prisma/client';

export class CreateEventResponseDTO {
  @ApiProperty({
    type: String,
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
  })
  id: string;

  @ApiProperty({
    type: String,
    example: 'Casamento do Jorginho',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: 'CASAMENTO',
  })
  type: string;

  @ApiProperty({
    type: Date,
    example: '2024-02-02',
  })
  date: Date;

  static factory(event: EventModel) {
    const { createdAt, deletedAt, hostId, ...eventResult } = event;
    return eventResult;
  }
}
