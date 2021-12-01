import { Controller } from '@nestjs/common';
import { EncryptsService } from './encrypts.service';

@Controller('encrypts')
export class EncryptsController {
  constructor(private readonly encryptsService: EncryptsService) {}
}
