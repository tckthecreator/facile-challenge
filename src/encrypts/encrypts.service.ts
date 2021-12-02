import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateStringDTO } from 'src/dto/createString.dto';
import { PrismaService } from 'src/prisma.service';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

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
        encripted_name: `${iv.toString('hex')}:${encryptedText}`,
      },
    });
  }

  async getString(id: number) {
    try {
      const textEncrypted = await this.prisma.post.findUnique({
        where: { id },
      });

      const parts = textEncrypted.encripted_name.split(':');
      const decipher = createDecipheriv(
        'aes-256-ctr',
        process.env.PASSWORD_CRYPTO,
        Buffer.from(parts[0], 'hex'),
      );
      const textDescrypted =
        decipher.update(parts[1], 'hex', 'utf-8') + decipher.final('utf-8');

      return {
        id: textEncrypted.id,
        messagem_descriptografada: textDescrypted,
      };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: 'Nenhum registro com esse ID encontrado',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
