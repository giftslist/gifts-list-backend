import { Module } from '@nestjs/common';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
