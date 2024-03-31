import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/services';
import { EventGiftModule } from '../event-gifts/event-gift.module';
import { UsersModule } from '../users/users.module';
import { EventsController } from './events.controller';
import { EventsRepository } from './events.repository';
import { EventsService } from './events.service';

@Module({
  imports: [UsersModule, EventGiftModule],
  providers: [EventsService, EventsRepository, PrismaService],
  controllers: [EventsController],
  exports: [EventsService],
})
export class EventsModule {}
