const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

router.get('/master-leads', (req, res, next) => {
	console.log('made it to the backend');
	Lead.find().then((leads) => {
		res.json(leads);
	});
});

module.exports = router;
