import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateEventGiftsRequestDTO {
  @ApiProperty({
    type: String,
    description: 'Id do evento',
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  event_id: string;

  @ApiProperty({
    type: Array,
    description: 'Nomes dos presentes',
    example: ['Panela', 'Prato'],
    required: true,
  })
  @IsArray()
  @IsNotEmpty()
  names: string[];
}
