import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LoginRes } from './dto/login.res';
import { Public } from './public.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOkResponse({
    type: LoginRes,
  })
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  signIn(@Body() loginDto: LoginDto): Promise<LoginRes> {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }
}
