import { Injectable } from '@nestjs/common';
import { CreatePushStkDto } from './dto/create-push-stk.dto';
import { UpdatePushStkDto } from './dto/update-push-stk.dto';

@Injectable()
export class PushStkService {
  create(createPushStkDto: CreatePushStkDto) {
    return 'This action adds a new pushStk';
  }

  findAll() {
    return `This action returns all pushStk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pushStk`;
  }

  update(id: number, updatePushStkDto: UpdatePushStkDto) {
    return `This action updates a #${id} pushStk`;
  }

  remove(id: number) {
    return `This action removes a #${id} pushStk`;
  }
}
