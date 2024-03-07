import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwagger = (
  app: INestApplication,
  documentationPath = 'api',
) => {
  const config = new DocumentBuilder()
    .setTitle("Gift's List")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(documentationPath, app, document);
};
