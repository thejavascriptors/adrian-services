create keyspace IF NOT EXISTS reviews
with replication = 
{ 'class': 'SimpleStrategy'
, 'replication_factor': 1
};

use reviews;

CREATE COLUMNFAMILY IF NOT EXISTS items
( id UUID 
, username TEXT
, createdAt TIMESTAMP
, title TEXT
, review TEXT
, stars TINYINT
, productId UUID
, foundHelpful INT
, PRIMARY KEY (productId, stars)
);
