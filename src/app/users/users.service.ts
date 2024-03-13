import { Injectable, NotFoundException } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

import { EmailAlreadyRegisteredException } from 'src/common/errors';
import type { CreateUserParams, LoginUserParams } from './interfaces';
import { UsersRepository } from './users.repository';

import { UserNotFoundException } from './errors';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create({ name, email, password }: CreateUserParams) {
    const registeredUser = await this.usersRepository.findFirst({
      email,
    });

    if (registeredUser) {
      throw new EmailAlreadyRegisteredException();
    }

    const encryptedPassword = this.getEncryptedText(password);

    return this.usersRepository.create({
      name,
      email,
      password: encryptedPassword,
    });
  }

  async getById(id: string) {
    const registeredUser = await this.usersRepository.findFirst({
      id,
    });

    if (!registeredUser) {
      throw new UserNotFoundException();
    }

    return registeredUser;
  }

  async loginUser({ email, password }: LoginUserParams) {
    const encryptedPassword = this.getEncryptedText(password);

    const user = await this.usersRepository.findFirst({
      email,
      password: encryptedPassword,
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  private getEncryptedText(value: string) {
    return CryptoJS.MD5(value).toString();
  }
}
