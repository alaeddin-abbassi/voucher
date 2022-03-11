import { Test, TestingModule } from '@nestjs/testing';
import { VoucherController } from './voucherController';
import { VoucherRepository } from './voucher-repository.service';
import { Voucher } from './voucher.schema';

describe('Voucher Controller', () => {
  let voucherController: VoucherController;

  const voucher = { code: 12345678, value: 3.5 } as Voucher;
  const mockVoucherService = {
    save: jest.fn().mockReturnValue(Promise.resolve(voucher)),
    getHelloVoucher: jest
      .fn()
      .mockReturnValue('Make the voucher world great a gain!'),
  };
  beforeEach(async () => {
    const voucherApp: TestingModule = await Test.createTestingModule({
      controllers: [VoucherController],
      providers: [
        VoucherRepository,
        {
          provide: VoucherRepository,
          useValue: mockVoucherService,
        },
      ],
    }).compile();
    voucherController = voucherApp.get<VoucherController>(VoucherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(voucherController.getHelloVoucher()).toBe(
        'Make the voucher world great a gain!',
      );
    });
    it('should create voucher', async () => {
      //TODO make test with number >1
      const dto = { number: 1, value: 3.5 };
      const result = await voucherController.create(dto);
      expect(result).toStrictEqual([12345678]);
    });
  });
});
