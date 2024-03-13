import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginUserRequestDTO {
  @ApiProperty({
    type: String,
    description: 'Email do usuário',
    name: 'email',
    example: 'example@gmail.com',
    required: true,
    minimum: 10,
  })
  @MinLength(10)
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Senha de acesso do usuário',
    name: 'password',
    example: '##7654',
    required: true,
    minimum: 8,
  })
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;
}
