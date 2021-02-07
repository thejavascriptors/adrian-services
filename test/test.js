const assert = require('assert');
const axios = require('axios');
const chai = require('chai')
const should = chai.should;
const Reviews = require('../database/Review.js')


// commenting out tests that require a running server
// describe('Should get data from the api call.', function() {
//   describe('#Get Request', function() {
//     it('Should return the data of the api call.', async function() {
//        let Data = [];
//         await Axios('http://localhost:3000/reviews').then(reviews => {
//           Data = reviews.data
//         }).catch(err => console.log(err));

//         Data.should.have.length
//     });



//     it('Should have over 100 entries', async function() {
//       let Data = [];
//       let counter = 0;
//       await Axios('http://localhost:3000/reviews').then(reviews => {
//          Data = reviews.data
//        })

//       for (let i = 0; i < Data.length; i++) {
//         counter++;
//       }


//       let result = counter >= 100;

//       result.should.be.true
//    });

//   });
// });





// describe('Database features should work correctly.', function (done) {


//    it('Should post information to the database', async function (){
//        Reviews.create({
//         username: 'test',
//         title: 'test insertion',
//         review: 'Inserting into database test',
//         stars: 1,
//         foundHelpful: 1
//        }).then(() => done());

//   });


//   it('Should filter out according to find feature.', async function () {
//     Reviews.find({
//       username: 'test'
//     }).then(data => data.should.exist);


//   });


// });