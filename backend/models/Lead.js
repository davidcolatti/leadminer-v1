const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema({
	businessName: String,
	phoneNumber: String,
	city: String,
	state: String,
	contactName: String,
	streetAddress: String,
	secondPhoneNumber: String,
	notes: Array
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
