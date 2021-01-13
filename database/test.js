const Review = require('./Review.js');



async function getEntries () {
  let data = await Review.find({});
  console.log(data)

}



getEntries();