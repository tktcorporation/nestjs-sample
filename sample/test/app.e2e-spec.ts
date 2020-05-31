import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { UsersDao } from 'src/dao/users.dao';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ first_name: 'John', last_name: 'Doe' })
      .expect(201)
      .expect(JSON.stringify({ method: 'post', message: 'created' }));
  });
  it('/users (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/users?first_name=John&last_name=Doe')
      .expect(200);
    const body = response.body as {
      users: UsersDao.Entity[];
    };
    expect(body.users).toBeDefined();
    if (body.users.length < 1) return;
    expect(body.users[0].id).toBeGreaterThan(0);
    expect(body.users[0].name.length).toBeGreaterThan(0);
  });
});
