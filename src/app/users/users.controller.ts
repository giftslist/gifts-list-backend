import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { BadRequestDTO } from 'src/common/dtos';
import {
  CreateUserRequesDTO,
  CreateUserResponseDTO,
  LoginUserRequestDTO,
  LoginUserResponseDTO,
} from './dtos';

import { UsersService } from './users.service';

@ApiTags('Users')
@ApiBadRequestResponse({ type: BadRequestDTO })
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ type: CreateUserResponseDTO })
  @Post()
  async create(@Body() params: CreateUserRequesDTO) {
    const { email, name, password } = params;

    try {
      const user = await this.usersService.create({
        email,
        name,
        password,
      });

      return CreateUserResponseDTO.factory(user);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  @ApiOkResponse({ type: CreateUserResponseDTO })
  @HttpCode(200)
  @Post('/login')
  async login(@Body() params: LoginUserRequestDTO) {
    const { email, password } = params;

    try {
      const user = await this.usersService.loginUser({
        email,
        password,
      });

      return LoginUserResponseDTO.factory(user);
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }
}
