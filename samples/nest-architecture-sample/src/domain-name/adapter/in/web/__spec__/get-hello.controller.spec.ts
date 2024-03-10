import { Test, TestingModule } from '@nestjs/testing';
import { GetHelloController } from '../get-hello.controller';
import { GetHelloService } from '../../../../application/service/get-hello.service';

describe('GetHelloController', () => {
  let getHelloController: GetHelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloController],
      providers: [GetHelloService],
    }).compile();

    getHelloController = app.get<GetHelloController>(GetHelloController);
  });

  describe('root', () => {
    it('should return "Hello!"', () => {
      expect(getHelloController.getHello()).toBe('Hello!');
    });
  });
});
