import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStringDTO } from './dto/CreateStringDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getStringToEncrypt(@Body() createStringDTO: CreateStringDTO) {
    return this.appService.getStringToEncrypt(createStringDTO);
  }
}
