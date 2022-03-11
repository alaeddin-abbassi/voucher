import { Test, TestingModule } from '@nestjs/testing';
import { VoucherController } from './voucherController';
import { VoucherService } from './voucher.service';

describe('AppController', () => {
  let appController: VoucherController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VoucherController],
      providers: [VoucherService],
    }).compile();

    appController = app.get<VoucherController>(VoucherController);
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
