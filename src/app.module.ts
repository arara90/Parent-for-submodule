import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserServiceModule } from './user-service/user-service.module';

@Module({
  imports: [UserServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
