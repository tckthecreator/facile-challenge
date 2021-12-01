import { Body, Controller, Post } from '@nestjs/common';
import { CreateStringDTO } from 'src/dto/createString.dto';
import { EncryptsService } from './encrypts.service';

@Controller('encrypts')
export class EncryptsController {
  constructor(private readonly encryptsService: EncryptsService) {}

  @Post()
  createString(@Body() createStringDTO: CreateStringDTO) {
    return this.encryptsService.createString(createStringDTO);
  }
}
