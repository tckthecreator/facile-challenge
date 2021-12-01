import { Injectable } from '@nestjs/common';
import { CreateStringDTO } from './dto/CreateStringDTO';

@Injectable()
export class AppService {
  getStringToEncrypt(createStringDTO: CreateStringDTO) {}
}
