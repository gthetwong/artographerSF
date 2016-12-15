var __const = {};
	__const.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var mapStyles = require('mapstyles');
//var React = require('react');

function __initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.77, lng: -122.44},
		zoom: 13,
		zoomControl: true,
		scrollwheel: false
		// styles: mapStyles
	});
}

(function(){
	function ajax(method, url, callback, data) {
		var xhr = new XMLHttpRequest();
		method = method.toUpperCase();
		xhr.open(method, url, true);

		if(method === 'POST')
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4 && xhr.status === 200) {
				callback(xhr);
			}
		}
		if (data)
			xhr.send(data);
		else
			xhr.send();
	}

	function _getCurrentEvents(events){
		var eventList = [];
		for( var i = 0; i < events.length; i++){
			var ev = events[i];
			var opening = {};
			var date = ev.start.date? ev.start.date: ev.start.dateTime;
			date = new Date(date);
			if (date >= new Date()){
				opening.date = new Date(date);
				opening.location = ev.location;
				opening.name = ev.summary;
				opening.status = ev.status;
				opening.description = ev.description;
				eventList.push(opening);
			}
		}
		eventList.sort(function(a,b){
			if (a.date > b.date){
				return 1;
			}
			if (a.date < b.date){
				return -1;
			}
			return 0;
		});
		return eventList;
	}

	function _stripImage(description){
		var share = description.querySelector('.addtoany_share_save_container');
		var img = description.querySelectorAll('img');
		share.remove();
		if (img.length){
			for(var i = 0;i < img.length; i++){
				img[i].remove();
			}
			return img;
		}
	}

	function _createEvent(ev){
		var container = document.body.querySelector('.eventList');
		var item = document.createElement('div');
		var name = document.createElement('h1');
		var date = document.createElement('span');
		var description = document.createElement('div');
		var img;

		name.innerHTML = ev.name;
		date.innerHTML = "When its happening: " + __const.weekdays[ev.date.getDay()] + ', ' + ev.date + ev.date.getDate() ;
		description.innerHTML = ev.description;
		img = _stripImage(description)[0] || document.createElement('img');

		item.classList.add('eventItem');
		name.classList.add('eventName');
		date.classList.add('eventDate');
		img.classList.add('eventImage');
		description.classList.add('eventDescription');

		item.appendChild(name);
		item.appendChild(date);
		item.appendChild(img);
		item.appendChild(description);
		container.appendChild(item);

		item.addEventListener('click', function(e){
			img.classList.toggle('open');
			description.classList.toggle('open');
		});
	}

	ajax('get', '/events', function(xhr){
		var body = JSON.parse(xhr.response);
		var events = _getCurrentEvents(body.events.items);
		for (var i = 0; i < events.length; i++){
			// _createEvent(events[i]);
		}
	});

})();
