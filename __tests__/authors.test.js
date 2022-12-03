const pool = require('../lib/utils/pool');
const setup = require('../data/setup');

const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('GET /authors should return the list of authors and their books', async () => {
    const resp = await request(app).get('/authors');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(2);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
      books: expect.any(Array),
    });
  });
});
