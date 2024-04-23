import { User } from '../entities/user.entity';
import { Type } from 'class-transformer';
import { UserResource } from './user.resource';

export class UserCollection {
  @Type(() => UserResource)
  data: User[];
}
