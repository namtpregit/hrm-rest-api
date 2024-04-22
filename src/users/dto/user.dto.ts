import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user-role.enum';
import { AutoMap } from '@automapper/classes';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class UserDto {
  @AutoMap()
  @ApiProperty()
  id: number;

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  first_name: string;

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  last_name: string;

  @AutoMap()
  @ApiProperty()
  @IsEmail()
  email: string;

  @AutoMap()
  @ApiProperty({ enum: UserRole })
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}
