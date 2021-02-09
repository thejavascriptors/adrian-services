import http from 'k6/http';
import { SharedArray } from 'k6/data';
import productIds from './ids.js';

let prodIds = new SharedArray('productIds', () => {
  return productIds;
});

const url = 'http://localhost:3000/reviews/' + prodIds[~~(Math.random() * prodIds.length)];

export let options = {
  vus: 1,
  stages: [
    { duration: '3m', target: 1 },
    { duration: '3m', target: 16 },
    { duration: '3m', target: 128 },
    { duration: '3m', target: 512 },
    { duration: '3m', target: 1024 },
    { duration: '3m', target: 2048 },
    { duration: '3m', target: 4096 },


  ],
  thresholds: {
    'http_req_duration': ['p(95) < 800'],
  }
};


export default function() {
  let response = http.get(url);
}
