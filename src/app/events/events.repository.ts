import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(){

  }
}
