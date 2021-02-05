create keyspace IF NOT EXISTS reviews
with replication = 
{ 'class': 'SimpleStrategy'
, 'replication_factor': 1
};

use reviews;

CREATE COLUMNFAMILY IF NOT EXISTS items
(  id UUID PRIMARY KEY
,  username TEXT
,  title TEXT
,  review TEXT
,  stars TINYINT
,  productId UUID
,  foundHelpful INT
);
