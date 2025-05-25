import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Please use a valid email' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Pass must be at least 6 cha' })
  password: string;
}
