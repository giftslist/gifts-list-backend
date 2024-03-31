import { Module } from '@nestjs/common';

import { DashboardModule } from './app/dashboard/dashboard.module';
import { EventGiftModule } from './app/event-gifts/event-gift.module';
import { EventsModule } from './app/events/events.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [UsersModule, EventsModule, EventGiftModule, DashboardModule],
})
export class AppModule {}
