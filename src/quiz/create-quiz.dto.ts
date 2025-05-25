import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @MaxLength(255, { message: 'Max len must be 255' })
  title: string;

  @MinLength(6, { message: 'Min len must be 6' })
  @IsString()
  description: string;
}
