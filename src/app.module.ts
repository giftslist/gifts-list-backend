import { Module } from '@nestjs/common';

import { EventsModule } from './app/events/events.module';
import { GiftsListModule } from './app/gifts-list/gifts-list.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [UsersModule, EventsModule, GiftsListModule],
})
export class AppModule {}
