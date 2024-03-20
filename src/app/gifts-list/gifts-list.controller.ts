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
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BadRequestDTO } from 'src/common/dtos';
import { CreateGiftsListRequestDTO, GetGiftsListResponseDTO } from './dtos';
import { GiftsListService } from './gifts-list.service';

@ApiTags('Gifts List')
@ApiBadRequestResponse({ type: BadRequestDTO })
@Controller('gifts-list')
export class GiftsListController {
  constructor(private readonly giftsListService: GiftsListService) {}

  @ApiCreatedResponse({ type: GetGiftsListResponseDTO })
  @Post()
  async create(@Body() params: CreateGiftsListRequestDTO) {
    const { event_id, names } = params;

    try {
      const giftsList = await this.giftsListService.create({
        eventId: event_id,
        names,
      });

      return GetGiftsListResponseDTO.factory(giftsList);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  @ApiResponse({ type: GetGiftsListResponseDTO })
  @Get(':event_id')
  async findGiftsList(@Param('event_id') event_id: string) {
    try {
      const giftsList = await this.giftsListService.findManyByEventID(event_id);

      return GetGiftsListResponseDTO.factory(giftsList);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }
}
