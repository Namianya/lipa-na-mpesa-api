import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PushStkModule } from './push-stk/push-stk.module';

@Module({
  imports: [PushStkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
