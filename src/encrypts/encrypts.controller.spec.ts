import { Test, TestingModule } from '@nestjs/testing';
import { EncryptsController } from './encrypts.controller';
import { EncryptsService } from './encrypts.service';

describe('EncryptsController', () => {
  let controller: EncryptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncryptsController],
      providers: [EncryptsService],
    }).compile();

    controller = module.get<EncryptsController>(EncryptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
