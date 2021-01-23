const db  = require('./index.js');
const Review = require('./Review.js')



const deleteReviews = function () {
  Review.deleteMany({})
   .then(()=> console.log('Wiped database.')).catch(err => {
     console.log(err)
   });
}


deleteReviews();
