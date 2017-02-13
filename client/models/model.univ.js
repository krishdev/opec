var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Universities = new Schema({
	country: String,
	university: String,
	url: String
});

console.log('mongoose univ initialized');
module.exports = mongoose.model('universities', Universities);
