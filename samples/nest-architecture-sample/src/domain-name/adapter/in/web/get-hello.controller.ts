import { Controller, Get } from '@nestjs/common';
import { GetHelloService } from '../../../application/service/get-hello.service';

@Controller()
export class GetHelloController {
  constructor(private readonly getHelloService: GetHelloService) {}

  @Get()
  getHello(): string {
    return this.getHelloService.getHello();
  }
}
