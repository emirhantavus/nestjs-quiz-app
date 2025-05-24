import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz/quiz.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'quiz.sqlite',
      entities: [Quiz, User],
      synchronize: true, // Geliştirme için otomatik tablo oluşturur
    }),
    QuizModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
