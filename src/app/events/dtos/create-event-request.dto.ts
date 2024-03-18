import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { EventType } from 'src/common/enums/event-type.enum';

export class CreateEventRequestDTO {
  @ApiProperty({
    type: String,
    description: 'Titulo do Evento',
    example: 'Evento legal',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Tipo do evento',
    example: 'CASAMENTO',
    required: true,
  })
  @IsEnum(EventType)
  @IsNotEmpty()
  type: EventType;

  @ApiProperty({
    type: Date,
    description: 'Data do evento',
    example: '2024-02-02',
    required: true,
  })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({
    type: String,
    description: 'Id do anfitrião',
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
    required: true,
  })
  @IsNotEmpty()
  @IsUUID()
  host_id: string;
}
