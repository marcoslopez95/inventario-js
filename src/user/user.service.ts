import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { responseDelete } from 'src/helpers/response.helper';

@Injectable()
export class UserService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'mo',
      email: 'mio@gmail.com',
      password: '123456',
      role: 'admin',
    },
  ];

  create(createUserDto: CreateUserDto) {
    this.counterId++;
    const newUser: User = {
      id: this.counterId,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`The user ${id} not exits`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((item: User) => item.id === id);
    this.users[index] = {
      ...user,
      ...updateUserDto,
    };
    return this.users[index];
  }

  remove(id: number) {
    this.findOne(id);
    const index = this.users.findIndex((item: User) => item.id === id);
    this.users.splice(index, 1);
    return responseDelete();
  }
}
