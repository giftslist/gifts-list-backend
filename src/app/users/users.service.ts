import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

import { EmailAlreadyRegisteredException } from 'src/common/errors';
import type { CreateUserParams } from './interfaces';
import { UsersRepository } from './users.repository';

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

  private getEncryptedText(value: string) {
    return CryptoJS.MD5(value).toString();
  }
}
