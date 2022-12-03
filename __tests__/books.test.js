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
    expect(resp.body.length).toBe(2);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "authors": Array [
          Object {
            "dob": "1989",
            "first_name": "Cornejo",
            "id": 3,
            "last_name": "Andrew",
            "pob": "Oceanside",
          },
        ],
        "id": "2",
        "released": "1900",
        "title": "Call of the Wild",
      }
    `);
  });
  it('GET /books/:id should return an individual book and their authors', async () => {
    const resp = await request(app).get('/books/1')
});
