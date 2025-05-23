import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './create-quiz.dto';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}
  findAll() {
    return this.quizRepository.find();
  }

  findOne(id: number) {
    return this.quizRepository.findOneBy({ id });
  }

  async create(createQuizDto: CreateQuizDto) {
    const newQuiz = this.quizRepository.create(createQuizDto);
    return await this.quizRepository.save(newQuiz);
  }
}
