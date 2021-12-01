import { Module } from '@nestjs/common';
import { EncryptsService } from './encrypts.service';
import { EncryptsController } from './encrypts.controller';

@Module({
  controllers: [EncryptsController],
  providers: [EncryptsService],
})
export class EncryptsModule {}
