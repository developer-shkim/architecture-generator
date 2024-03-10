import { Module } from '@nestjs/common';
import { GetHelloController } from './domain-name/adapter/in/web/get-hello.controller';
import { GetHelloService } from './domain-name/application/service/get-hello.service';

@Module({
  imports: [],
  controllers: [GetHelloController],
  providers: [GetHelloService],
})
export class AppModule {}
