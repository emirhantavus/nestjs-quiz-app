import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Put,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './create-quiz.dto';
import { UpdateQuizDto } from './update-quiz.dto';
import { PatchQuizDto } from './patch-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(Number(id));
  }

  @Post()
  async create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.quizService.delete(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: PatchQuizDto) {
    return this.quizService.update(Number(id), dto);
  }

  @Put(':id')
  async updatePut(@Param('id') id: string, @Body() dto: UpdateQuizDto) {
    return this.quizService.updatePut(Number(id), dto);
  }
}
