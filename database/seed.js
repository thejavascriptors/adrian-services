// const db  = require('./index.js');
// const Review = require('./Review.js')
const faker = require('faker')
const crypto = require('crypto')
const worker = require('worker_threads');
const {genUUID, mk_nUUIDS} = require('../uuidgen');
const {insertReview} = require('./cassandra.js');
const { uuid } = require('fast-check');
const process = require('process');
const { reset } = require('nodemon');

const genReviewArr = (u1, u2) => 
  [ faker.name.firstName()
  , u1
  , u2
  , faker.name.title()
  , faker.commerce.productDescription()
  , 1 + ~~(Math.random() * 5)
  , 1 + ~~(Math.random() * 100)
  ];

const genReview = (u1, u2) => ( 
  { username: faker.name.firstName()
  , id: u1
  , productId: u2
  , title: faker.name.title()
  , review: faker.commerce.productDescription()
  , stars: Math.floor(Math.random() * 5)
  , foundHelpful: Math.floor(Math.random() * 100)
  }
  )

// ~ 40s to generate 10,000,000 records
const gen = () => {
  console.time('timer');
  for (let i = 0; i < 10000; i++) {
    // buffer the FFI call to save some overhead
    let uuids = mk_nUUIDS(2000);
    for (let p = 0; p < 2000; p++) {
      genReview(uuids[p], uuids[p++]);
    }
    console.log(i);
  }
  console.timeEnd('timer');
}

const resetCrg = () => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
}
const writeProgress = (prog, limit) => {
  resetCrg();
  let tenth = (prog / limit * 10);
  let progBar = ('[' + '='.repeat(tenth * 2) + '>'.repeat(tenth < 10)).padEnd(21) + ']';
  process.stdout.write(`Progress: ${(tenth * 10).toFixed(0)}%`.padEnd(20) + progBar);
}

const endProgress = () => {
  resetCrg();
  process.stdout.write(`Progress: 100%`.padEnd(20) + `[${'='.repeat(20)}]`);
}

const seedDB = async (n = 10000000, uuidBufSiz = 1000) => {
  if (n > uuidBufSiz) {
    n /= uuidBufSiz;
  }
  console.time(' runtime');

  for (let i = 0; i < n; i++) {
    writeProgress(i, n);
    // every review needs 2 UUIDs
    let uuids = mk_nUUIDS(uuidBufSiz << 1);
    let uptr = 0;

    let reviews = new Array(uuidBufSiz);
    for (let j = 0; j < uuidBufSiz; j++) {
      reviews[j] = genReviewArr(uuids[uptr++], uuids[uptr++]);
    }
    // console.log(reviews.length);
    // await Promise.all(reviews.map(insertReview));
  }

  endProgress();
  console.timeEnd(' runtime');
}

seedDB(10000000, 1000);