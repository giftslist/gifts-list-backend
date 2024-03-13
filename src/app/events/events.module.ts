import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsRepository } from './events.repository';
import { EventsService } from './events.service';
import { PrismaService } from 'src/common/services';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [EventsService, EventsRepository, PrismaService],
  controllers: [EventsController],
})

export class EventsModule { }
