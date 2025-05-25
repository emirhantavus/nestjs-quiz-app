import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { LoginUserDto } from './login-user.dto';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      if (
        error.code === 'SQLITE_CONSTRAINT' ||
        error.code === '23505' ||
        error.code === 'ER_DUP_ENTRY'
      ) {
        throw new BadRequestException('Email or username already exists');
      }
      throw error;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOneBy({
      email: loginUserDto.email,
    });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    if (user.password !== loginUserDto.password) {
      throw new UnauthorizedException('Invalid password');
    }

    return { message: 'Login successful', user };
  }
}
