const app = require('../server/index');
const supertest = require('supertest');
const db = require('../db/index');


describe('This is my first test', () => {
  test('and it does this', () => {
    expect(true).toBe(true);
  });
});
