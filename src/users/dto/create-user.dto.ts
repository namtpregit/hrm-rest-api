import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto extends OmitType(UserDto, ['id'] as const) {
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
