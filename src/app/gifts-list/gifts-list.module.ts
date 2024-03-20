import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/services';
import { GiftsListController } from './gifts-list.controller';
import { GiftsListRepository } from './gifts-list.repository';
import { GiftsListService } from './gifts-list.service';

@Module({
  providers: [GiftsListService, GiftsListRepository, PrismaService],
  controllers: [GiftsListController],
})
export class GiftsListModule {}
