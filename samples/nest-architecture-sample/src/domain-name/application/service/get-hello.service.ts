import { Injectable } from '@nestjs/common';
import { GetHelloQuery } from '../port/in/get-hello.query';

@Injectable()
export class GetHelloService implements GetHelloQuery {
  getHello(): string {
    return 'Hello!';
  }
}
