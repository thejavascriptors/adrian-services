const express = require('express');
const app = express();
const PORT = 3000;
const Reviews = require('../database/Review.js')
const cors = require('cors')
const path = require('path')
app.use(cors());
app.use(express.static('public'));




app.get('/', (req,res) => {

 console.log('Request recieved.')

})


app.get('/reviews', async (req, res) => {
  console.log('POST request recieved.')

  const data = await Reviews.find({})

  res.send(data);


});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});