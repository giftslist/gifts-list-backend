import { Module } from '@nestjs/common';

import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

import { EventsModule } from '../events/events.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [UsersModule, EventsModule],
})
export class DashboardModule {}
