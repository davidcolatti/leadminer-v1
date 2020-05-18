const yelp = require('yelp-fusion');
const keys = require('../config/keys');
const Lead = require('../models/Lead');

// not sure if I need this mongoose set up
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/leadminer';
console.log('Connecting DB to ', MONGODB_URI);

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
	.catch((err) => console.error('Error connecting to mongo', err));

const apiKey = keys.apiKey;

function searchYelp(term, location) {
	const searchRequest = {
		term: term,
		location: location,
		limit: 50,
		sort_by: 'review_count'
	};

	const client = yelp.client(apiKey);

	let businessList;
	client
		.search(searchRequest)
		.then((res) => {
			businessList = res.jsonBody.businesses.map((each) => {
				let data = {
					businessName: each.name,
					phoneNumber: each.display_phone,
					city: each.location.city,
					state: each.location.state
				};
				return data;
			});
		})
		.then(() => {
			console.log(businessList);
			Lead.insertMany(businessList);
		})
		.catch((e) => {
			console.log(e);
		});
}

searchYelp('construction', 'miami');
