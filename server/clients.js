var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var clients = new Schema({
	name: "String",
	slug: "String"
});

module.exports = mongoose.model('Client', clients);