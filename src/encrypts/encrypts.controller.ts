import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateStringDTO } from 'src/dto/createString.dto';
import { EncryptsService } from './encrypts.service';

@Controller('encrypts')
export class EncryptsController {
  constructor(private readonly encryptsService: EncryptsService) {}

  @Post('/create')
  createString(@Body() createStringDTO: CreateStringDTO) {
    try {
      return this.encryptsService.createString(createStringDTO);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'O campo name é obrigatório',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  getString(@Param('id') id: string) {
    return this.encryptsService.getString(+id);
  }
}
