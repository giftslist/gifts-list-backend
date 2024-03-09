import { ApiProperty } from "@nestjs/swagger";

export class CreateEventResponseDTO {
  @ApiProperty({
    type: String,
    example: '524756c3-a956-4cb5-828d-71f3409e5f3d',
  })
  id: string;

  @ApiProperty({
    type: String,
    example: 'Casamento do Jorginho',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: 'Casamento',
  })
  type: string;

  @ApiProperty({
    type: Date,
    example: '2024-02-02',
  })
  date: Date;
}