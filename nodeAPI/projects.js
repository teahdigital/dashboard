var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var project = new Schema({
	name: "String",
	description: "String",
	urls: {
		name: "String",
		url: "String"
	},
	client: {
		id: "String",
		name: "String",
		slug: "String"
	},
	screenshot: "String",
});	

module.exports = mongoose.model('Project', project);