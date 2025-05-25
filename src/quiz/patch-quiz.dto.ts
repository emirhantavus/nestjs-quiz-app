import { IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class PatchQuizDto {
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'Min len must be 3' })
  @MaxLength(255, { message: 'Max len must be 255' })
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Max len must be 255' })
  @MinLength(6, { message: 'Min len must be 6' })
  description?: string;
}
