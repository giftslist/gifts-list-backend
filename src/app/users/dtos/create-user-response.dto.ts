import { ApiProperty } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';

export class CreateUserResponseDTO {
  @ApiProperty({
    type: String,
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
  })
  id: string;

  @ApiProperty({
    type: String,
    example: 'teste@email.com',
  })
  email: string;

  @ApiProperty({
    type: String,
    example: 'Tony Stark',
  })
  name: string;

  static factory(user: UserModel) {
    const { createdAt, deletedAt, ...newUser } = user;
    return newUser;
  }
}
