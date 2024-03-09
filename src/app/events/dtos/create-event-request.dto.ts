import { ApiProperty } from "@nestjs/swagger";
import { Event as EventModel } from "@prisma/client";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

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

  static fromEventModel(event: EventModel) {
    const { createdAt, deletedAt, ...eventResult } = event;
    return eventResult;
  }
}