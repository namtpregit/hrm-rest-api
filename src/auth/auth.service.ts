import { Injectable } from '@nestjs/common';
import { LoginRes } from './dto/login.res';

@Injectable()
export class AuthService {
  async signIn(email: string, password: string): Promise<LoginRes> {
    // const user = await this.usersService.findOneByEmail(email);
    // if (!user || !(await bcrypt.compare(password, user.password))) {
    //   throw new UnauthorizedException();
    // }
    // const payload = {
    //   sub: user.id,
    //   first_name: user.first_name,
    //   last_name: user.last_name,
    // };
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    // };
    console.log('email, password :>> ', email, password);
    return {
      access_token: 'sdfdsf',
    };
  }
}
