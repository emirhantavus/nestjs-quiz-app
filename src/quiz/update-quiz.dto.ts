import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateQuizDto {
  @IsString()
  @MaxLength(255, { message: 'Max len must be 255' })
  @MinLength(6, { message: 'Min len must be 6' })
  title?: string;

  @IsString()
  @MaxLength(255, { message: 'Max len must be 255' })
  @MinLength(6, { message: 'Min len must be 6' })
  description?: string;
}
