const {genUUID, mk_nUUIDS} = require('./lib/index.js');
const crypto = require('crypto');

const genJS = () => {
    let buf = crypto.randomBytes(16);
    buf[6] &= 0b01001111; // set high nibble to 4
    buf[8] &= 0b10111111; // set high nibble to one of 8, 9, 'A', 'B'
    let s = buf.toString('hex');
    let intervals = [8, 4, 4, 4, 12]; // positions to split s at
    let res = '';
    for (let i = 0, j = 0; i < intervals.length; res += '-' + s.substr(j, intervals[i]), j += intervals[i++]) ;;
    // for (let i = 0, j; i < intervals.length; j = intervals[i++], res += s.substring(0, j), s = s.substring(j)) ;;
    return res.substr(1);
}

const timeit = (f, n = 10000) => {
  let a = new Date();
  for (let i = 0; i < n; i++) {
    f();
  }
  let b = new Date() - a;

  console.log(`Total time: ${b} ms`)
  console.log(`avg (${n} tests): ${b / n} ms`)
}

timeit(genUUID, 10000000);
timeit(genJS, 10000000);
timeit(() => mk_nUUIDS(100), 100000)
// console.log(mk_nUUIDS(100));
