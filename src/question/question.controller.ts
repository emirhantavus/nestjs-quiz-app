import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(Number(id));
  }

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    //quiz id eklicem sonra
    return this.questionService.create(createQuestionDto, null);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedto: UpdateQuestionDto) {
    return this.questionService.update(Number(id), updatedto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(Number(id));
  }
}
