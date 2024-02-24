import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersResponsitory: typeof User,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    return await this.usersResponsitory.create<User>(user);
  }

  async findAll() {
    return await this.usersResponsitory.findAll<User>();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersResponsitory.findOne<User>({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.usersResponsitory.findOne<User>({
      where: { mail_address: email },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data = await this.findOne(id);
    if (!data) {
      return 'Not found!';
    }
    data['first_name'] = updateUserDto['first_name'];
    // return await this.usersResponsitory.update<User>(updateUserDto, {
    //   where: { id },
    // });
    return data.save();
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data) {
      return 'Not found!';
    }
    return await data.destroy();
  }
}
