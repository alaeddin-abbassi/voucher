import { Test, TestingModule } from '@nestjs/testing';
import { VoucherController } from './voucherController';
import { VoucherService } from './voucher.service';
import { Voucher } from './voucher.schema';

describe('AppController', () => {
  let appController: VoucherController;
  const voucher = { number: 2, value: 3 } as Voucher;
  const mockVoucherService = {
    save: jest.fn().mockReturnValue(Promise.resolve(voucher)),
    getHelloVoucher: jest
      .fn()
      .mockReturnValue('Make the voucher world great a gain!'),
  };
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VoucherController],
      providers: [
        VoucherService,
        {
          provide: VoucherService,
          useValue: mockVoucherService,
        },
      ],
    }).compile();

    appController = app.get<VoucherController>(VoucherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHelloVoucher()).toBe(
        'Make the voucher world great a gain!',
      );
    });
    it('should create voucher', async () => {
      expect(await appController.create({ number: 2, value: 3 })).toStrictEqual(
        { number: 2, value: 3 },
      );
    });
  });
});
