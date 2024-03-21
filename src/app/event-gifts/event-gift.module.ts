import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/services';
import { EventGiftController } from './event-gift.controller';
import { EventGiftRepository } from './event-gift.repository';
import { EventGiftService } from './event-gift.service';

@Module({
  providers: [EventGiftService, EventGiftRepository, PrismaService],
  controllers: [EventGiftController],
})
export class EventGiftModule {}
