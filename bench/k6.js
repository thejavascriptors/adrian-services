import http from 'k6/http';
import productIds from './ids.js';

const url = 'http://localhost:3000/reviews/';

export let options = {
  // rps: 1000,
  vus: 1,
  stages: [
    { duration: '3m', target: 10 },
    { duration: '3m', target: 100 },
    { duration: '3m', target: 500 },
    { duration: '3m', target: 1000 },
    { duration: '3m', target: 2000 },
  ],
  thresholds: {
    'http_req_duration': ['p(95) < 800'],
  }
};


export default function() {
  let id = productIds[~~(Math.random() * productIds.length)];
  let response = http.get(url + id);
}

