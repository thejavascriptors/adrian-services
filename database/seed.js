const db  = require('./index.js');
const Review = require('./Review.js')


const sampleReviews = [
{
  username: 'Jay',
  title: 'PS5 controller',
  review: 'Awesome product I hope to purchase from this seller again. My product came in perfect condition!',
  stars: 5,
  foundHelpful: 112
},
{
  username: 'Adrian',
  title: 'This product is so trash',
  review: 'This product was just so bad. It will not work. It looks like there has been damage to this product. I highly suggest anyone thinking about buying this product to avoid it.',
  stars: 1,
  foundHelpful: 1
},
{
  username: 'Berret',
  title: 'Good product',
  review: 'This product worked as intended, I have no complaints but it is nothing speical. It is just a controller for a console. The controller feels great.',
  stars: 3,
  foundHelpful: 32
},
{
  username: 'Minh',
  title: 'Great product but with just one complaint!',
  review: 'This product looks amazing! My only complaint with it is that it does not work on a computer! I do not currently own a PS5 so I have no use for the controller. Please make this compatiable with a computer!',
  stars: 4,
  foundHelpful: 12
}


]







const insertReviews = function () {
  Review.create(sampleReviews)
   .then(()=> console.log('Created.'));
}


insertReviews();