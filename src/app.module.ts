import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz/quiz.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'quiz.sqlite',
      entities: [Quiz],
      synchronize: true, // Geliştirme için otomatik tablo oluşturur
    }),
    QuizModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
