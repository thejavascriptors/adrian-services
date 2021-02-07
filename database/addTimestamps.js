const cass = require('cassandra-driver');
const {client, insertReview} = require('./cassandra.js');
const {StatusBar} = require('./seed.js');
const { Transform } = require('stream');


const startTime = new Date(2000, 01, 01).valueOf();
const endTime = Date.now();
const timeDiff = endTime - startTime; // make these toplevel constants to prevent recomputation

const mkRndStamp = () => (Math.random() * timeDiff) + startTime;



const queryStr = `select id from items`;


let processed = 0;
// length of db

// client.stream(queryStr, [jG], {prepare: true})
//     .on('readable', async function() {
//         let row;
//         let ctr = 1000;
//         let i = 0;
//         let tr = () => {
//             let row = this.read();
//             i++;
//             if (!ctr--) {
//                 status.writeProgress(i);
//                 ctr = 1000;
//             }
//             if (row) {
//                 return addTimeStamp(row.id)
//                     .then(tr);
//             }
//             return null;
//         }
//         tr();

//         // while (row = this.read()) {
//         //     await addTimeStamp(row.id);
//         //     i++;
//         //     if (!ctr--) {
//         //         status.writeProgress(i);
//         //         ctr = 1000;
//         //     }
//         // }
//     })
//     .on('end', function() {
//         status.endProgress();
//     })


const loggerConduit = (max) => {
    let i = 0;
    let ctr = 0;
    let status = new StatusBar(max);

    return new Transform({
        objectMode: true,
        transform(x, _, cb) {
            i++;
            if (!ctr--) {
                status.writeProgress(i);
                ctr = 1024;
            }
            this.push(x);
            cb();
        }
    })
}

const timeConduit = new Transform({
    objectMode: true,
    transform(row, encoding, cb) {
        this.push([mkRndStamp(), row.id]);
        cb();
    }
});

const numRows = 115018002;

const addTimeStamp = (id) => {
    let q = `update items set createdat = ? where id = ?`;
    return client.execute(q, [mkRndStamp(), id], { prepare: true });
}

let addTimes = async () => {
    let chunks = [];
    let tot = 0;
    let stream = 
          client.stream(queryStr, [], {prepare: true})
                .pipe(timeConduit)
                .pipe(loggerConduit(numRows));
    let q = `update items set createdat = ? where id = ?`;
    cass.concurrent.executeConcurrent(client, q, stream, {concurrencyLevel: 1024});
};

addTimes();
// console.log(cass);