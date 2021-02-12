// require('newrelic');
const express = require('express');
const PORT = 3000;
const Reviews = require('../database/cassandra.js');
const cors = require('cors');
const path = require('path');
const posix = require('posix');
// const expressStaticGzip = require('express-static-gzip');

const app = express();
app.use(cors());

// to increase concurrent connections
posix.setrlimit('nofile', {soft: 8192});


// app.use('/', expressStaticGzip(path.join(__dirname, '../public'), {
//   enableBrotli: true,
//   orderPreference: ['br', 'gz']
// }));

// app.get('/', (req,res) => {

//  console.log('Request recieved.');
//  res.status(200).end();

// })

// lifting callbacks into top scope is faster
function handleRows(res) {
  return (err, data) => {
    if (err) {
      res.status(400).end();
    } else {
      res.status(200);
      let rows = data.rows; // prevent extra dereferencing
      res.write('['); // manual JSON since we're not marshalling into native data types
      let lim = rows.length - 1;
      for (let i = 0; i < lim; i++) {
        res.write(rows[i]['[json]']);
        res.write(',');
      }
      res.write(rows[lim]['[json]']); // prevent trailing ','
      res.write(']');
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