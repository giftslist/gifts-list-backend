import { Module } from '@nestjs/common';
import { UsersModule } from './app/users/users.module';
import { EventsModule } from './app/events/events.module';

@Module({
  imports: [UsersModule, EventsModule],
})
export class AppModule {}
