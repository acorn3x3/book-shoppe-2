const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
    beforeEach(() => {
      return setup(pool);
    });
  
    afterAll(() => {
      pool.end();
    });

    it.only('GET /books should return a list of books and their authors', async () => {
        const resp = await request(app).get('/books');
        expect(resp.status).toBe(200);
        expect(resp.body.length).toBe(1);
        expect(resp.bod[0]).toMatchInlineSnapshot();
    });

    });