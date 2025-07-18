import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';

@Module({
  providers: [QuestionService],
  controllers: [QuestionController],
  exports: [QuestionService],
  imports: [TypeOrmModule.forFeature([Question])],
})
export class QuestionModule {}
