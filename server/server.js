require('newrelic');
const express = require('express');
const app = express();
const PORT = 3000;
const Reviews = require('../database/cassandra.js');
const cors = require('cors');
const path = require('path');
const posix = require('posix');
app.use(cors());

// to increase concurrent connections
posix.setrlimit('nofile', {soft: 8192});


app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res) => {

 console.log('Request recieved.');
 res.status(200).end();

})

// lifting callbacks into top scope is faster
function handleRows(res) {
  return (err, data) => {
    if (err) {
      res.status(400).end();
    } else {
      res.status(200);
      let row;
      for (row of data.rows) {
        res.write(row['[json]']);
      }
      res.end();
    }
  };
}

app.get('/reviews/:productId?', (req, res) => {
  // console.log('GET request recieved.')
  Reviews.findCb(req.params.productId, handleRows(res));
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
