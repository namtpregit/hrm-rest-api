import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRes } from './dto/login.res';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<LoginRes> {
    const user = await this.usersService.findOneByEmail(email);
    // const a = await bcrypt.hash('123456', parseInt(process.env.BCRYPT_SALT));
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
    };

    return {
      me: user,
      access_token: await this.jwtService.signAsync(payload),
      token_type: 'Bearer',
      expires_in: process.env.JWT_EXPIRES_IN,
    };
  }
}
