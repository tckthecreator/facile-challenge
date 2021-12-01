import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStringDTO } from 'src/dto/createString.dto';
import { EncryptsService } from './encrypts.service';

@Controller('encrypts')
export class EncryptsController {
  constructor(private readonly encryptsService: EncryptsService) {}

  @Get(':id')
  getString(@Param('id') id: string): any {
    return this.encryptsService.getString(id);
  }

  @Post()
  createString(@Body() createStringDTO: CreateStringDTO) {
    return this.encryptsService.createString(createStringDTO);
  }
}
