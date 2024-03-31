import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { BadRequestDTO, UnauthorizedRequestDTO } from 'src/common/dtos';
import {
  CreateEventRequestDTO,
  CreateEventResponseDTO,
  GetEventResponseDTO,
} from './dtos';
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

  @ApiOkResponse({ type: GetEventResponseDTO })
  @Get(':event_id')
  async findEvent(@Param('event_id') eventID: string) {
    try {
      const result = await this.service.getEventAndGiftsByID(eventID);
      return GetEventResponseDTO.factory(result);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }
}
