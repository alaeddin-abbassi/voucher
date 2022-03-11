import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { VoucherModule } from '../src/voucherModule';
import { Connection, Model } from 'mongoose';
import { getConnectionToken, getModelToken } from '@nestjs/mongoose';
import { Voucher } from '../src/voucher.schema';

describe('Voucher Controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [VoucherModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    moduleFixture.get<Model<Voucher>>(getModelToken(Voucher.name));

    await app.init();
  });

  afterEach(async () => {
    await (app.get(getConnectionToken()) as Connection).db.dropDatabase();
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Make the voucher world great a gain!');
  });

  it('/ (POST voucher)', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({ number: 2, value: 3 })
      .expect(201)
      .expect((result) => {
        expect(result.body).toBeDefined();
        expect(result.body.number).toStrictEqual(2);
        expect(result.body.value).toStrictEqual(3);
      });
  });
});
