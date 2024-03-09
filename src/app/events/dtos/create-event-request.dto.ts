import { ApiProperty } from "@nestjs/swagger";
import { Event as EventModel } from "@prisma/client";
import { IsDateString, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateEventRequestDTO {
  @ApiProperty({
    type: String,
    description: 'Titulo do Evento',
    name: 'titulo',
    example: 'Evento legal uau',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Tipo do evento',
    name: 'tipo',
    example: 'Chá de bebê',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    type: Date,
    description: 'Data do evento',
    name: 'data',
    example: '2024-02-02',
    required: true
  })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({
    type: String,
    description: 'Id do anfitrião',
    name: 'anfitrião',
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
    required: true
  })
  @IsNotEmpty()
  @IsUUID()
  hostId: string;

  static fromEventModel(event: EventModel) {
    const { createdAt, deletedAt, ...eventResult } = event;
    return eventResult;
  }
}