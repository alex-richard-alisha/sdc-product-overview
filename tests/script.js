import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

// A simple counter for http requests

export const requests = new Counter('http_reqs');

// you can specify stages of your test (ramp up/down patterns) through the options object
// target is the number of VUs you are aiming for

export const options = {
  stages: [
    { duration: '1m', target: 1000 }, // below normal load
    { duration: '2m', target: 1000 },
    { duration: '1m', target: 2000 }, // normal load
    { duration: '2m', target: 2000 }, //6m
    { duration: '1m', target: 3000 }, // around the breaking point
    { duration: '2m', target: 3000 }, //9m
    { duration: '1m', target: 4000 }, // beyond the breaking point
    { duration: '2m', target: 4000 },
    { duration: '5m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:3000/api';

  // const checkRes = check(res, {
  //   'status is 200': (r) => r.status === 200,
  // });
  const res = http.batch([
    [
      'GET', `${BASE_URL}/products/1`,
    ],
    [
      'GET', `${BASE_URL}/products/1/styles`,
    ],
    [
      'GET', `${BASE_URL}/products/1/related`,
    ],
  ]);

  sleep(1);
}

// k6 run tests/script.js
