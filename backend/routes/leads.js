const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const User = require('../models/User');

router.get('/master-leads', (req, res, next) => {
	console.log('made it to the backend');
	Lead.find().then((leads) => {
		res.json(leads);
	});
});

router.post('/add-lead', isAuth, (req, res, next) => {
	console.log(req.body, req.user);

	User.findById(req.user._id).then((user) => {
		console.log(user);
		user.contactedLeads = req.body;
		user.save((err, doc) => {
			if (err) throw err;

			res.json(doc);
		});
	});
	// User.update({ contactedLeads: req.body });
});

function isAuth(req, res, next) {
	req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
