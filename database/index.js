const mongoose = require('mongoose');
const mongouri = 'mongodb://localhost/reviews'



const db = mongoose.connect(mongouri)


module.export = db;