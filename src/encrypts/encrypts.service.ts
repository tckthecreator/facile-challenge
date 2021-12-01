import { Injectable } from '@nestjs/common';
import { CreateStringDTO } from 'src/dto/createString.dto';
import { PrismaService } from 'src/prisma.service';
import { createCipheriv, randomBytes } from 'crypto';

@Injectable()
export class EncryptsService {
  constructor(private readonly prisma: PrismaService) {}

  // criptografa o texto recebido, passando como um HEX
  createString(createStringDTO: CreateStringDTO) {
    const iv = randomBytes(16);
    const cipher = createCipheriv(
      'aes-256-ctr',
      process.env.PASSWORD_CRYPTO,
      iv,
    );
    const encryptedText =
      cipher.update(createStringDTO.name, 'utf-8', 'hex') + cipher.final('hex');

    return this.prisma.post.create({
      data: {
        encripted_name: encryptedText,
      },
    });
  }
}
