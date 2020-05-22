const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema({
	businessName: String,
	phoneNumber: String,
	city: String,
	state: String,
	firstName: String,
	lastName: String,
	streetAddress: String,
	secondPhoneNumber: String,
	notes: Array,
	category: Array,
	email: String
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
