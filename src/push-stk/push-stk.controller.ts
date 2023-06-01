import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PushStkService } from './push-stk.service';
import { CreatePushStkDto } from './dto/create-push-stk.dto';
import { UpdatePushStkDto } from './dto/update-push-stk.dto';

@Controller('push-stk')
export class PushStkController {
  constructor(private readonly pushStkService: PushStkService) {}

  @Post()
  create(@Body() createPushStkDto: CreatePushStkDto) {
    return this.pushStkService.create(createPushStkDto);
  }

  @Get()
  findAll() {
    return this.pushStkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pushStkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePushStkDto: UpdatePushStkDto) {
    return this.pushStkService.update(+id, updatePushStkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pushStkService.remove(+id);
  }
}
