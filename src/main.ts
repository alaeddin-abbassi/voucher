import { NestFactory } from '@nestjs/core';
import { VoucherModule } from './voucherModule';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(VoucherModule);

  const config = new DocumentBuilder()
    .setTitle('Voucher API')
    .setDescription('The Voucher API description')
    .setVersion('1.0')
    .addTag('vouchers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
