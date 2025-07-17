import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz/quiz.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { QuestionModule } from './question/question.module';
import { Question } from './question/question.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'quiz.sqlite',
      entities: [Quiz, User, Question],
      synchronize: true, // Geliştirme için otomatik tablo oluşturur
    }),
    QuizModule,
    AuthModule,
    UserModule,
    QuestionModule,
  ],
})
export class AppModule {}
