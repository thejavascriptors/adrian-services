const cass = require('cassandra-driver');
const {client, insertReview} = require('../cassandra.js');
const {StatusBar} = require('./seed.js');
const { Transform, Readable, Writable } = require('stream');


const startTime = new Date(2000, 01, 01).valueOf();
const endTime = Date.now();
const timeDiff = endTime - startTime; // make these toplevel constants to prevent recomputation

/**
 * @return {number} - create a random timestamp between start and end
 */
const mkRndStamp = () => (Math.random() * timeDiff) + startTime;

const queryStr = `select id from items`;


/**
 * 
 * @param {number} max - Maximum expected number of operations
 * @return {Transform} - A pipe conduit that will write a status bar to stdout
 */
const loggerConduit = (max, frequency = 1024) => {
    let i = 0;
    let ctr = 0;
    let status = new StatusBar(max);

    return new Transform({
        objectMode: true,
        transform(x, _, cb) {
            i++;
            if (!ctr--) {
                status.writeProgress(i);
                ctr = frequency;
            }
            this.push(x);
            cb();
        },
        final(cb) {
            status.endProgress();
            cb();
        },
    });
}

/**
 * @return {Transform} - Given a stream of ids, return [random timestamp, id] for each input id
 */
const timestampConduit = new Transform({
    objectMode: true,
    transform(row, encoding, cb) {
        this.push([mkRndStamp(), row.id]);
        cb();
    }
});

const numRows = 115018002;

/**
 * 
 * @param {UUID} id - a primary key
 * @return {Promise} - The result of updating the createdAt column of the given id 
 */
const addTimeStamp = (id) => {
    let q = `update items set createdat = ? where id = ?`;
    return client.execute(q, [mkRndStamp(), id], { prepare: true });
}

/**
 * @return {Promise<cassandra.concurrent.ResultSetGroup>} - the result of updating every row in the DB 
 * 
 * Adds a timestamp to every row in the database (takes a while)
 */
let insertTimes = async () => {
    let chunks = [];
    let tot = 0;
    let stream = 
          client.stream(queryStr, [], {prepare: true})
                .pipe(timestampConduit)
                .pipe(loggerConduit(numRows));
    let q = `update items set createdat = ? where id = ?`;
    cass.concurrent.executeConcurrent(client, q, stream, {concurrencyLevel: 1024});
};

if (require.main === module) {
    insertTimes();
}