import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { VoucherModule } from '../src/voucherModule';
import { Connection, Model } from 'mongoose';
import { getConnectionToken, getModelToken } from '@nestjs/mongoose';
import { Voucher } from '../src/voucher.schema';
import * as mongoose from 'mongoose';

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
      .get('/voucher/hello')
      .expect(200)
      .expect('Make the voucher world great a gain!');
  });

  it('/ (POST voucher)', () => {
    return request(app.getHttpServer())
      .post('/voucher')
      .send({ number: 2, value: 3 })
      .expect(201)
      .expect((result) => {
        expect(result.body).toBeDefined();
        expect(result.body.length).toStrictEqual(2);
      });
  });

  it('/voucher/list - List all vouchers', async () => {
    //given
    const conn = mongoose.createConnection('mongodb://localhost:27017/nest');
    await conn.collection('vouchers').insertOne({ code: 123456779, value: 1 });
    await conn.collection('vouchers').insertOne({ code: 123454443, value: 3 });
    await conn.collection('vouchers').insertOne({ code: 123456231, value: 22 });

    return request(app.getHttpServer())
      .get('/voucher/list')
      .expect(200)
      .expect((result) => {
        expect(result.body).toBeDefined();
        expect(result.body.length).toStrictEqual(3);
      });
  });

  //TODO FIX
  it('/voucher/:code - update voucher by code', async () => {
    const conn = mongoose.createConnection('mongodb://localhost:27017/nest');
    await conn.collection('vouchers').insertOne({ code: 123456779, value: 1 });

    return request(app.getHttpServer())
      .put('/voucher/list/123456779')
      .send({ value: 1 })
      .expect(200)
      .expect((result) => {
        expect(result.body).toBeDefined();
        expect(result.body.length).toStrictEqual(1);
      });
  });
});
