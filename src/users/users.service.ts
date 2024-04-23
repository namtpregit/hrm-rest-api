import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository
      .create(createUserDto)
      .then((resultEntity) => {
        return resultEntity.get({ plain: true });
      });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findOneByID(id: number) {
    return await this.userRepository.findByPk(id);
  }

  async update(updateUserDto: UpdateUserDto, id: number): Promise<User> {
    const data = await this.userRepository.update(updateUserDto, {
      where: { id },
    });
    if (!data) {
      throw new UnauthorizedException();
    }
    return await this.findOneByID(id);
  }

  async remove(id: number): Promise<number> {
    return await this.userRepository.destroy({ where: { id } });
  }
}
