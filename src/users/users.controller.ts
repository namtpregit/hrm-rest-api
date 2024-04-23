import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  // @Roles(UserRole.COMPANY_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: UserDto,
  })
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
