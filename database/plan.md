Database: Cassandra

Justification (taken from my personal slack)

my understanding of Cassandra is that it's extremely useful for large, distributed database clusters, where replication, uptime, and fast access is imperative. It uses a flat hierarchy between nodes, and uses eventual consistency to achieve consensus between nodes. This adds a little bit of nondeterminism to databases accesses, since there's no guarantee that you'll be able to fetch the newest data immediately. I wouldn't use it for medical records/fintech where data freshness is more important than distributed access. In my case, I'm serving reviews for products, so low-latency network-wide updates aren't as important as high availability, fast access times, and easy deploys.
Being able to scale linearly with hardware is  also really interesting to me, since it seems like horizontal scaling is cheaper than vertical scaling on AWS. I'm interested in working with big data after graduation, and using CQL seems like an invaluable skill to have in that space. The hadoop integration is also alluring.

storage cheaper than compute
Schema:
CREATE COLUMNFAMILY IF NOT EXISTS reviews
(  id INT PRIMARY KEY
,  username TEXT
,  title TEXT
,  review TEXT
,  stars TINYINT
,  productId UUID (index this)
,  foundHelpful INT
)

cassandra vs other database
- for something more time sensitive, might want ACID

other considerations - make sure to match data shape with what the front-end is expecting

API:
  productId :: UUID
  '/reviews/:productId' - serves reviews associated with that specific product

Calcs:
- after running seed script: total size 32768, 101 records
- avg size = 324.43b / record (mongodb)
- 10,000,000 records: est. 3.244356GB

formula for calculating data rise:
reg_total_column_size = column_name_size + col_val_size + 16