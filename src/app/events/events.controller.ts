import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { BadRequestDTO, UnauthorizedRequestDTO } from 'src/common/dtos';
import { CreateEventRequestDTO, CreateEventResponseDTO } from './dtos';
import { EventsService } from './events.service';

@ApiTags('Eventos')
@ApiUnauthorizedResponse({ type: UnauthorizedRequestDTO })
@ApiBadRequestResponse({ type: BadRequestDTO })
@Controller('events')
export class EventsController {
  constructor(private readonly service: EventsService) {}

  @ApiCreatedResponse({ type: CreateEventResponseDTO })
  @Post()
  async create(@Body() params: CreateEventRequestDTO) {
    const { name, date, type, host_id } = params;

    try {
      const result = await this.service.create({
        name,
        date,
        type,
        hostId: host_id,
      });

      return CreateEventResponseDTO.factory(result);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }
}
