import { Module } from '@nestjs/common';
import { EncryptsService } from './encrypts.service';
import { EncryptsController } from './encrypts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EncryptsController],
  providers: [EncryptsService, PrismaService],
})
export class EncryptsModule {}
