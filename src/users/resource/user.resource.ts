import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { Exclude, Expose } from 'class-transformer';

export class UserResource {
  @AutoMap()
  @ApiProperty()
  first_name: string;

  @AutoMap()
  @ApiProperty()
  last_name: string;

  @AutoMap()
  @ApiProperty()
  email: string;

  @Exclude()
  updated_at: string;

  @Exclude()
  password: string;

  @Exclude()
  role: string;

  @Expose()
  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
