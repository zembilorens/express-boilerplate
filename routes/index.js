var express = require('express');
var router = express.Router();
var io = require('../io');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express Boilerplate',
	});
});

module.exports = router;