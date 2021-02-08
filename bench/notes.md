Seems like mapping over the rows is the fastest.

Using a stream doesn't seem to make sense for how small the outputs actually are (0-24 reviews per productId), so it incurs a ton of overhead. Especially since I have to use objectMode for my stream transformers.


Using `res.json()` is the best way for now.

Metric |  Object mapping | Direct JSON | Stream |
|------|-----------------|-------------|--------|
**Duration** (ms)        | 
average| 214.33          | 205.364     | 285.888|
median | 93.846          | 80.314      | 165.533|
**K6 data**|
iterations |      932713 | 973699      | 698917 |
data received|3870377239 | 4535307758  | 3025017957 


#### K6 program:

```
  stages: 
  [ { duration: '3m', target: 1 }
  , { duration: '3m', target: 10 }
  , { duration: '3m', target: 100 }
  , { duration: '3m', target: 500 }
  , { duration: '3m', target: 1000 }
  ]
```
