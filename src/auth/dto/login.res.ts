import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LoginRes {
  @ApiProperty()
  @IsEmail()
  access_token: string;
}
