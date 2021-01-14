const express = require('express');
const app = express();
const PORT = 3000;
const Reviews = require('../database/Review.js')

app.get('/reviews', async (req, res) => {
  console.log('POST request recieved.')

  const data = await Reviews.find({})

  res.send(data);




})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});