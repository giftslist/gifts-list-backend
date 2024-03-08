import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { BadRequestDTO, UnauthorizedRequestDTO } from 'src/common/dtos';
import { CreateEventRequestDTO, CreateEventResponseDTO } from './dtos';

@ApiTags('Events')
@ApiUnauthorizedResponse({ type: UnauthorizedRequestDTO })
@ApiBadRequestResponse({ type: BadRequestDTO })
@Controller('events')
export class EventsController {
  constructor() {}

  @Post()
  @ApiCreatedResponse({ type: CreateEventResponseDTO })
  async create(@Body() params: CreateEventRequestDTO) {

    try {
      return {
        
      };
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }
}
