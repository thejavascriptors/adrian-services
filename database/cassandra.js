const cass = require('cassandra-driver');
const client = new cass.Client(
{ contactPoints: ['127.0.0.1:9042']
, keyspace: 'reviews'
, localDataCenter: 'datacenter1'
});

const revInsQuery = 
    `insert into items 
        (id, username, title, review, stars, productId, foundHelpful)
        values 
        (?,  ?,        ?,     ?,      ?,     ?,         ?);
    `

/** 
 * @param {Array} items - [id, username, title, review, stars, productId, foundHelpful];
 * Insert an array of values into the Cassandra DB.
 */

const insertReview = (reviewArr) => 
    client.execute(revInsQuery, reviewArr, {prepare: true});

module.exports = 
{ insertReview
, client
}

/*
 5a8aae14-cc6e-9c4f-4b3a-44e20c3d79b0
 70a33c3f-d51c-b9a8-44fe-d99ebcc8f58e
 921fdf83-b6a8-9764-44b9-91bc022825d0
 afa43218-b564-ab11-44ce-3fec27d32e1c
 4d2fad97-08c2-974e-4ae9-ba9de290a23d

*/