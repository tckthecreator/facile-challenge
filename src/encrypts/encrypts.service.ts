import { Injectable } from '@nestjs/common';
import { CreateStringDTO } from 'src/dto/createString.dto';

@Injectable()
export class EncryptsService {
  getString(id: string) {}

  createString(createStringDTO: CreateStringDTO) {}
}
