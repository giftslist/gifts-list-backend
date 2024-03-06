import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

import type { CreateUser } from './interfaces';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create({ name, email, password }: CreateUser) {
    // TO DO: Adicionar criptografia para senha e validação se usuário já existe
    return this.usersRepository.create({
      name,
      email,
      password,
    });
  }
}
