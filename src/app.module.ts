import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { logger } from './common/middleware/functionLogger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(
        { path: 'todo', method: RequestMethod.GET },
        { path: 'todo', method: RequestMethod.POST },
      );
  }
}
