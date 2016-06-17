var express = require('express');
var router = express.Router();
var https = require('https');
var moment = require('moment');

/* GET home page. */
router.get('/events', function(req, res, next) {
	https.get(
		// 'https://www.googleapis.com/calendar/v3/calendars/orougreqvdjcj9iagjhj0qllt6bqj87f@import.calendar.google.com/events?key=AIzaSyDvaaalnZCpnuNonahsZF3RSctJ6wRSdgE',
		'https://www.googleapis.com/calendar/v3/calendars/33alanb@gmail.com/events?key=AIzaSyDvaaalnZCpnuNonahsZF3RSctJ6wRSdgE',
	function(response){
		var body = '';

		response.on('data', function(chunk){
			body += chunk;
		});

		response.on('end', function(){
			var parsed = JSON.parse(body);

			res.send({events: parsed});
		});
	});
});

router.get('/', function(req,res, next) {
	res.render('index');
});

module.exports = router;
