const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const Lead = require('../models/Lead');

router.post('/signup', (req, res, next) => {
	User.register(req.body, req.body.password)
		.then((user) => {
			req.login(user, function(err, result) {
				res.status(201).json(user);
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ err });
		});
});

//return await service.get('/is-logged-in');
router.get('/is-logged-in', (req, res, next) => {
	const { user } = req;
	console.log(req.user);
	// res.json(req.user);
	req.user
		? Lead.find().then((masterLeads) => {
				res.status(200).json({ user, masterLeads });
			})
		: res.status(304).json({ message: 'please log in' });
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
	const { user } = req;
	// res.status(200).json(user);
	console.log(user);
	Lead.find().then((masterLeads) => {
		res.status(200).json({ user, masterLeads });
	});
});

router.get('/logout', (req, res, next) => {
	req.logout();
	res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
	User.findById(req.user._id)
		.then((user) => res.status(200).json({ user }))
		.catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
	req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
