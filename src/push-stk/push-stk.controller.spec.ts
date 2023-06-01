import { Test, TestingModule } from '@nestjs/testing';
import { PushStkController } from './push-stk.controller';
import { PushStkService } from './push-stk.service';

describe('PushStkController', () => {
  let controller: PushStkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushStkController],
      providers: [PushStkService],
    }).compile();

    controller = module.get<PushStkController>(PushStkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
