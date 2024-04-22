import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class LoginRes {
  @ApiProperty()
  me: User;
  access_token: string;
  token_type: string;
  expires_in: string;
}
