import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find({ relations: ['quiz'] });
  }

  async findOne(id: number): Promise<Question> {
    const question = await this.questionRepository.findOne({
      where: { id },
      relations: ['quiz'],
    });
    if (!question) {
      throw new NotFoundException('Question not found');
    }
    return question;
  }

  async create(
    createQuestionDto: CreateQuestionDto,
    quiz: any,
  ): Promise<Question> {
    const question = this.questionRepository.create({
      ...createQuestionDto,
      quiz,
    });
    return await this.questionRepository.save(question);
  }

  async update(id: number, updateDto: UpdateQuestionDto): Promise<Question> {
    const question = await this.questionRepository.findOneBy({ id });
    if (!question) {
      throw new NotFoundException('Question not found');
    }
    Object.assign(question, updateDto);
    return this.questionRepository.save(question);
  }

  async remove(id: number): Promise<void> {
    const r = await this.questionRepository.delete(id);
    if (r.affected === 0) {
      throw new NotFoundException('Question not found');
    }
  }
}
