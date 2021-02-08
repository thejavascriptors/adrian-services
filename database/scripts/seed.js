// const db  = require('./index.js');
// const Review = require('./Review.js')
const faker = require('faker')
const crypto = require('crypto')
const {genUUID, mk_nUUIDS} = require('../../uuidgen/lib');
const {insertReview} = require('../cassandra.js');
const process = require('process');
const { reset } = require('nodemon');


const startTime = new Date(2000, 1, 1).valueOf();
const endTime = Date.now();
const timeDiff = endTime - startTime; // make these toplevel constants to prevent recomputation

/**
 * @return {number} - create a random timestamp between start and end
 */
const mkRndStamp = () => (Math.random() * timeDiff) + startTime;

const queryStr = `select id from items`;

const genReviewBody = () => {
    return faker.lorem.sentences((1 + ~~(Math.random() * 10)) + 1 + ~~(Math.random() * 10));
    // generate a roughly-normal distribution
}

// order matters more here
const genReviewArr = (u1, u2) => 
[ u1
, faker.name.findName()
, mkRndStamp()
, faker.company.catchPhrase()
, genReviewBody()
, 1 + (~~(Math.random() * 5))
, u2
, ~~(Math.random() * 1024)
]

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

class StatusBar {
  constructor(limit) {
    this.limit = limit;
    console.time(' runtime');
  }
  resetCrg() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
  }
  writeProgress(prog) {
    this.resetCrg();
    let tenth = (prog / this.limit * 10);
    let progBar = ('[' + '='.repeat(tenth * 2) + '>'.repeat(tenth < 10)).padEnd(21) + ']';
    process.stdout.write(`Progress: ${(tenth * 10).toFixed(2)}%`.padEnd(20) + progBar);
  }

  endProgress() {
    this.resetCrg();
    process.stdout.write(`Progress: 100%`.padEnd(20) + `[${'='.repeat(20)}]`);
    console.timeEnd(' runtime')
  }
}

function* uuidFactory(n = 2048) {
  while (true) {
    let arr = mk_nUUIDS(n);
    for (let uuid of arr) {
      yield uuid;
    }
  }
}

const seedDB = async (inserter, n = 10000000, bufSize = 1024) => {

  let factory = uuidFactory();
  let arr = new Array(bufSize);
  let aptr = 0;

  let status = new StatusBar(n);

  for (let i = 0; i < n; i++) {
    status.writeProgress(i);

    let lim = ~~(Math.random() * 24);
    let prodId = factory.next().value;

    for (let j = 0; j < lim; j++) {
      let itemId = factory.next().value;
      arr[aptr++] = genReviewArr(itemId, prodId);
      if (aptr >= bufSize) {
        await inserter(arr);
        aptr = 0;
      }
    }
  }

  status.endProgress();
}

//todo: implement marsaglia polar method for generating normdist of product id's
if (require.main === module) {
  seedDB(insertReview);
}

module.exports = {
  StatusBar,
}
