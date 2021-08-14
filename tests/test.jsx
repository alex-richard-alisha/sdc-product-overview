const supertest = require('supertest');
const { Pool, Client } = require('pg');
const app = require('../server/server');
const { password } = require('../config/config');
const request = require('supertest')('http://localhost:3000');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'products_dev',
  password,
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'products_dev',
  password,
});

describe('Runs a fake test', () => {
  test('True is true is true', () => {
    expect(true).toBe(true);
  });
});

test('GET /api/products/1', async () => {
  pool.connect();
  await request.get('/api/products/1')
    .expect(200)
    .then((response) => {
      // Check type and length
      // expect(Array.isArray(response.body)).toBeTruthy();
      // expect(response.body.length).toEqual(1);

      // // Check data
      expect(response.body).toEqual(expect.objectContaining({
        category: 'Jackets', default_price: 140, description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.', features: [{ feature: 'Fabric', value: 'Canvas' }, { feature: 'Buttons', value: 'Brass' }], id: 1, name: 'Camo Onesie', slogan: 'Blend in to your crowd',
      }));
      // expect(response.body[0].title).toBe(post.title);
      // expect(response.body[0].content).toBe(post.content);
    });
  pool.end();
});
