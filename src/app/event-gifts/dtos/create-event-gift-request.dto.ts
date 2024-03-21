import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateEventGiftRequestDTO {
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
    type: String,
    description: 'Nome dos presentes',
    example: 'Panela',
    required: true,
  })
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;
}
