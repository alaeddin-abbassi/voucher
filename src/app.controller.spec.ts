import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHelloVoucher()).toBe(
        'Make the voucher world great a gain!',
      );
    });
    it('should create voucher', () => {
      expect(appController.create({ number: 2, value: 3 })).toStrictEqual('5');
    });
  });
});
