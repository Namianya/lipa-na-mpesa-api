import { Test, TestingModule } from '@nestjs/testing';
import { PushStkService } from './push-stk.service';

describe('PushStkService', () => {
  let service: PushStkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushStkService],
    }).compile();

    service = module.get<PushStkService>(PushStkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
