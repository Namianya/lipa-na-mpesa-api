import { Controller, Post, Body } from '@nestjs/common';
import { PushStkService } from './push-stk.service';
import { CreatePushStkDto } from './dto/create-push-stk.dto';
import { UpdatePushStkDto } from './dto/update-push-stk.dto';

@Controller('push-stk')
export class PushStkController {
  constructor(private readonly pushStkService: PushStkService) {}

  @Post('send-stk')
  sendStk(@Body() createPushStkDto: CreatePushStkDto) {
    return this.pushStkService.sendStk(createPushStkDto);
  }

  @Post('callback')
  callbackURL(@Body() createPushStkDto: CreatePushStkDto) {
    return this.pushStkService.callbackURL(createPushStkDto);
  }
}
