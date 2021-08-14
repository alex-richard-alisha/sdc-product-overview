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
    .then(() => {
    });
  pool.end();
});
