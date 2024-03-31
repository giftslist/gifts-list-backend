import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwagger = (
  app: INestApplication,
  documentationPath = 'api',
) => {
  const config = new DocumentBuilder()
    .setTitle("Gift's List")
    .setVersion('1.0')
    .addServer(`http://localhost:${process.env.APP_PORT}/`, 'Local')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(documentationPath, app, document);
};
