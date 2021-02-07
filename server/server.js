require('newrelic');
const express = require('express');
const app = express();
const PORT = 3000;
const Reviews = require('../database/cassandra.js');
const cors = require('cors');
const path = require('path');
app.use(cors());


// app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res) => {

 console.log('Request recieved.');
 res.status(200).end();

})


app.get('/reviews/:productId?', async (req, res) => {
  try {
    // console.log('GET request recieved.')
    const data = await Reviews.find(req.params.productId);
    res.status(200).json(data).end();
  } catch(err) {
    console.error(err);
    res.status(400).end();
  }


});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
