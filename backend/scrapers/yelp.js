const yelp = require('yelp-fusion');
const keys = require('../config/keys');
const Lead = require('../models/Lead');

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
			businessList = res.jsonBody.businesses.forEach((each) => {
				let data = {
					businessName: each.name,
					phoneNumber: each.display_phone,
					city: each.location.city,
					state: each.location.state,
					category: each.categories.map((res) => res.title)
				};
				console.log(data);
				Lead.findOne({ phoneNumber: data.phoneNumber }).then((res) => {
					if (res) {
						console.log(`this lead exists and it's called ${data.businessName}`);
					} else {
						Lead.create(data);
						console.log(`it doesnt exist and I inserted ${data.businessName}`);
					}
				});
			});
		})
		.catch((e) => {
			console.log(e);
		});
}

module.exports = searchYelp;
