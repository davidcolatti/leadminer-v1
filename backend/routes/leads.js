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

router.post('/save-leads', isAuth, (req, res, next) => {
	console.log('saving and modifying a lead');

	User.findById(req.user._id).then((user) => {
		console.log(user);

		user.contactedLeads = req.body;
		user.save((err, doc) => {
			if (err) throw err;

			res.json(doc);
		});
	});
});

router.post('/searched-leads', (req, res, next) => {
	console.log('back end search leads');
	console.log(req.body);

	Lead.find({ [req.body.searchType]: { $regex: req.body.term, $options: 'i' } })
		.limit(0) // pagination
		.skip(0) // give index to the user
		.then((leads) => res.json({ leads }))
		.catch((err) => console.log(err));
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
});

router.post('/delete-lead', isAuth, (req, res, next) => {
	console.log(req.body, req.user);

	User.findById(req.user._id).then((user) => {
		console.log(user);
		user.contactedLeads = req.body;
		user.save((err, doc) => {
			if (err) throw err;

			res.json(doc);
		});
	});
});

router.post('/send-index', isAuth, (req, res, next) => {
	console.log(req.body, req.user);

	User.findById(req.user._id).then((user) => {
		console.log(user);
		user.indexOfMasterLeads = req.body.index;
		user.save((err, doc) => {
			if (err) throw err;

			res.json(doc);
		});
	});
});

function isAuth(req, res, next) {
	req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
