import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { BadRequestDTO } from 'src/common/dtos';
import {
  CreateEventGiftRequestDTO,
  CreateEventGiftsResponseDTO,
  GetEventGiftsResponseDTO,
} from './dtos';

import { CreateEventGiftsRequestDTO } from './dtos/create-event-gifts-request.dto';
import { SelectGiftRequestDTO } from './dtos/select-gift-request.dto ';
import { EventGiftService } from './event-gift.service';

@ApiTags('Presentes')
@ApiBadRequestResponse({ type: BadRequestDTO })
@Controller('event-gift')
export class EventGiftController {
  constructor(private readonly eventGiftService: EventGiftService) {}

  @ApiCreatedResponse({ type: CreateEventGiftsResponseDTO })
  @Post()
  async create(@Body() params: CreateEventGiftRequestDTO) {
    const { event_id, name } = params;

    try {
      const eventGift = await this.eventGiftService.create({
        eventId: event_id,
        name,
      });

      return CreateEventGiftsResponseDTO.factory(eventGift);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  @ApiCreatedResponse({ type: GetEventGiftsResponseDTO })
  @Post('many')
  async createMany(@Body() params: CreateEventGiftsRequestDTO) {
    const { event_id, names } = params;

    try {
      const gifts = await this.eventGiftService.createMany({
        eventId: event_id,
        names,
      });

      return GetEventGiftsResponseDTO.factory(gifts);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  @ApiResponse({ type: GetEventGiftsResponseDTO })
  @Get(':event_id')
  async findEventGifts(@Param('event_id') event_id: string) {
    try {
      const eventGifts =
        await this.eventGiftService.findManyByEventID(event_id);
      return GetEventGiftsResponseDTO.factory(eventGifts);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  @ApiOkResponse()
  @Delete(':gift_id')
  async deleteGift(@Param('gift_id') gift_id: string) {
    try {
      await this.eventGiftService.delete(gift_id);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  @ApiOkResponse()
  @Put('select')
  async selectGift(@Body() params: SelectGiftRequestDTO) {
    const { gift_id, giver_name } = params;

    try {
      await this.eventGiftService.selectGift({
        giftID: gift_id,
        giverName: giver_name,
      });
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }
}
