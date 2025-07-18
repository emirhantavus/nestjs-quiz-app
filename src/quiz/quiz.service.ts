import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './create-quiz.dto';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { UpdateQuizDto } from './update-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}
  findAll() {
    return this.quizRepository.find();
  }

  async findOne(id: number) {
    const quiz = await this.quizRepository.findOneBy({ id });
    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }
    return quiz;
  }

  async create(createQuizDto: CreateQuizDto) {
    const newQuiz = this.quizRepository.create(createQuizDto);
    return await this.quizRepository.save(newQuiz);
  }

  async delete(id: number) {
    const quiz = await this.quizRepository.findOneBy({ id });
    if (!quiz) {
      throw new NotFoundException(`Quiz with id ${id} not found`);
    }
    return await this.quizRepository.delete(id);
  }

  async update(id: number, dto: UpdateQuizDto) {
    const quiz = await this.quizRepository.findOneBy({ id });
    if (!quiz) {
      throw new NotFoundException(`Quiz with id ${id} not found`);
    }
    Object.assign(quiz, dto); // veri güncelleme
    return await this.quizRepository.save(quiz);
  }

  async updatePut(id: number, dto: UpdateQuizDto) {
    const quiz = await this.quizRepository.findOneBy({ id });
    if (!quiz) {
      throw new NotFoundException('Not found');
    }
    quiz.title = dto.title;
    quiz.description = dto.description;
    return await this.quizRepository.save(quiz);
  }
}
