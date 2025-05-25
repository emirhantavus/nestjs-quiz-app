import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'Username must be at least 3 characters' })
  @MaxLength(55, { message: 'Username must be shorter than 55 characters ' })
  username: string;

  @IsEmail({}, { message: 'Please use valid email' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 cha' })
  @MaxLength(32, { message: 'Password can not be longer than 32 cha' })
  password: string;
}
