import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';

describe('QuizService', () => {
  let service: QuizService;

  const mockQuizService = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuizService,
        {
          provide: getRepositoryToken(Quiz),
          useValue: mockQuizService,
        },
      ],
    }).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should return an array o f quizzes', async () => {
    const quizzes = [
      { id: 1, title: 't1', description: 'd1' },
      { id: 2, title: 't2', description: 'd2' },
    ];
    mockQuizService.find.mockResolvedValue(quizzes);

    const result = await service.findAll();
    expect(result).toEqual(quizzes);
  });
});
