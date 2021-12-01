import { Module } from '@nestjs/common';
import { EncryptsModule } from './encrypts/encrypts.module';

@Module({
  imports: [EncryptsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
