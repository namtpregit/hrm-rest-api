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
import { UserResource } from './resource/user.resource';
import { UserCollection } from './resource/user.collection';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: UserResource,
  })
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  async findAll(): Promise<UserCollection> {
    const users = await this.usersService.findAll();
    const data = new UserCollection();
    data.data = users;
    return data;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: UserResource,
  })
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  async findOne(@Param('id') id: string): Promise<UserResource> {
    const data = await this.usersService.findOneByID(+id);
    return new UserResource(data);
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
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return this.usersService.update(updateUserDto, +id);
  }

  @Delete(':id')
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse()
  @ApiBearerAuth('JWT-auth')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
