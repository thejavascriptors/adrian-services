const cass = require('cassandra-driver');
const client = new cass.Client(
{ contactPoints: ['127.0.0.1:9042']
, keyspace: 'reviews'
, localDataCenter: 'datacenter1'
});

const revInsQuery = 
    `insert into items 
        (id, username, createdAt, title, review, stars, productId, foundHelpful)
        values 
        (?,  ?,        ?,         ?,     ?,      ?,     ?,         ?)
    `

/** 
 * @param {Array} items - [id, username, title, review, stars, productId, foundHelpful];
 * Insert an array of values into the Cassandra DB.
 */

const insertReview = (reviewArrs) => 
    cass.concurrent.executeConcurrent(client, revInsQuery, reviewArrs, {prepare: true});

const defaultProduct = 'ff03bda9-43ee-aa7d-44af-681059d2546c';

const find = async (productId = defaultProduct) => {
    let selQuery = `
        select createdat, foundhelpful, review, stars, title, username
            from items 
            where productid = ?
        `;
    let {rows} = await client.execute(selQuery, [productId], { prepare: true });
    return rows.map(renameFields);
}

// camelcase vibes
const renameFields = (reviewObj) => {
    let {foundhelpful, createdat, ...keys} = reviewObj;
    return ( 
    { foundHelpful: foundhelpful
    , createdAt: createdat
    , ...keys
    }
    )
    ;
    
}

module.exports = 
{ insertReview
, find
}
