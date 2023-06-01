import { Module } from '@nestjs/common';
import { PushStkService } from './push-stk.service';
import { PushStkController } from './push-stk.controller';

@Module({
  controllers: [PushStkController],
  providers: [PushStkService]
})
export class PushStkModule {}
