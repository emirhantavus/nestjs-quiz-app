import { IsString, IsArray, ArrayMinSize } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  text: string;

  @IsArray()
  @ArrayMinSize(2, { message: 'required 2 at least' })
  @IsString({ each: true })
  options: string[];

  @IsString()
  correctAnswer: string;
}
