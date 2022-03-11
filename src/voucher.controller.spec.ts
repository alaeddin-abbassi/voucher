import { Test, TestingModule } from '@nestjs/testing';
import { VoucherController } from './voucherController';
import { VoucherService } from './voucher.service';

const expectedCodes = [12345678, 33345678, 123456543, 123983412];
describe('Voucher Controller', () => {
  let voucherController: VoucherController;

  const mockVoucherService = {
    create: jest.fn().mockReturnValue(Promise.resolve(expectedCodes)),
    getHelloVoucher: jest
      .fn()
      .mockReturnValue('Make the voucher world great a gain!'),
  };
  beforeEach(async () => {
    const voucherApp: TestingModule = await Test.createTestingModule({
      controllers: [VoucherController],
      providers: [
        VoucherService,
        {
          provide: VoucherService,
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
      const dto = { number: 1, value: 3.5 };
      const result = await voucherController.create(dto);
      expect(result).toStrictEqual(expectedCodes);
    });
  });
});
