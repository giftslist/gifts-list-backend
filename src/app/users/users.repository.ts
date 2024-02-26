import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  async create() {
    return {
      name: 'Teste',
      email: 'teste@gmail.com',
    };
  }
}
