import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class SelectGiftRequestDTO {
  @ApiProperty({
    type: String,
    description: 'Id do presente',
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  gift_id: string;

  @ApiProperty({
    type: String,
    description: 'Id do presenteador',
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  gift_giver_id: string;
}
