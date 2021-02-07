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
// TODO update the seeding script to actually include a timestamp so i don't have to fix this again

/** 
 * @param {Array} items - [id, username, title, review, stars, productId, foundHelpful];
 * Insert an array of values into the Cassandra DB.
 */

const insertReview = (reviewArr) => 
    client.execute(revInsQuery, reviewArr, {prepare: true});

const defaultProduct = '5a8aae14-cc6e-9c4f-4b3a-44e20c3d79b0';

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