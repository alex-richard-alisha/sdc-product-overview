const supertest = require('supertest');
const app = require('../server/index');
const db = require('../db/index');

beforeEach((done) => {
  db.connect('');
});

describe('This is my first test', () => {
  test('and it does this', () => {
    expect(true).toBe(true);
  });
});
