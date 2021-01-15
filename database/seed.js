const db  = require('./index.js');
const Review = require('./Review.js')
const faker = require('faker')

const sampleReviews = []


for (let i = 0; i <= 100; i++) {
   sampleReviews.push({
    username: faker.name.findName(),
    title: faker.name.title(),
    review: faker.commerce.productDescription(),
    stars: Math.floor(Math.random() * 6),
    foundHelpful: Math.floor(Math.random() * 1000)
  })
}







const insertReviews = function () {
  Review.create(sampleReviews)
   .then(()=> console.log('Created'));
}

insertReviews();