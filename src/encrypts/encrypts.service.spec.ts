import { Test, TestingModule } from '@nestjs/testing';
import { EncryptsService } from './encrypts.service';

describe('EncryptsService', () => {
  let service: EncryptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncryptsService],
    }).compile();

    service = module.get<EncryptsService>(EncryptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
