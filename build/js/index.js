!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = [{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#747474"
		}, {
			"lightness": "23"
		}]
	}, {
		"featureType": "poi.attraction",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#f38eb0"
		}]
	}, {
		"featureType": "poi.government",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ced7db"
		}]
	}, {
		"featureType": "poi.medical",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffa5a8"
		}]
	}, {
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#c7e5c8"
		}]
	}, {
		"featureType": "poi.place_of_worship",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#d6cbc7"
		}]
	}, {
		"featureType": "poi.school",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#c4c9e8"
		}]
	}, {
		"featureType": "poi.sports_complex",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#b1eaf1"
		}]
	}, {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [{
			"lightness": "100"
		}]
	}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}, {
			"lightness": "100"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffd4a5"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffe9d2"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "all",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.fill",
		"stylers": [{
			"weight": "3.00"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.stroke",
		"stylers": [{
			"weight": "0.30"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "labels.text",
		"stylers": [{
			"visibility": "on"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#747474"
		}, {
			"lightness": "36"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"color": "#e9e5dc"
		}, {
			"lightness": "30"
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": "100"
		}]
	}, {
		"featureType": "water",
		"elementType": "all",
		"stylers": [{
			"color": "#d2e7f7"
		}]
	}];
	return module.exports;
});

$__System.registerDynamic("1", ["2"], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	var __const = {};
	__const.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var mapStyles = $__require("2");
	// System.import('react');
	// var React = require('react');

	function __initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 37.77, lng: -122.44 },
			zoom: 13,
			zoomControl: true,
			scrollwheel: false
			// styles: mapStyles
		});
	}

	(function () {
		function ajax(method, url, callback, data) {
			var xhr = new XMLHttpRequest();
			method = method.toUpperCase();
			xhr.open(method, url, true);

			if (method === 'POST') xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					callback(xhr);
				}
			};
			if (data) xhr.send(data);else xhr.send();
		}

		function _getCurrentEvents(events) {
			var eventList = [];
			for (var i = 0; i < events.length; i++) {
				var ev = events[i];
				var opening = {};
				var date = ev.start.date ? ev.start.date : ev.start.dateTime;
				date = new Date(date);
				if (date >= new Date()) {
					opening.date = new Date(date);
					opening.location = ev.location;
					opening.name = ev.summary;
					opening.status = ev.status;
					opening.description = ev.description;
					eventList.push(opening);
				}
			}
			eventList.sort(function (a, b) {
				if (a.date > b.date) {
					return 1;
				}
				if (a.date < b.date) {
					return -1;
				}
				return 0;
			});
			return eventList;
		}

		function _stripImage(description) {
			var share = description.querySelector('.addtoany_share_save_container');
			var img = description.querySelectorAll('img');
			share.remove();
			if (img.length) {
				for (var i = 0; i < img.length; i++) {
					img[i].remove();
				}
				return img;
			}
		}

		function _createEvent(ev) {
			var container = document.body.querySelector('.eventList');
			var item = document.createElement('div');
			var name = document.createElement('h1');
			var date = document.createElement('span');
			var description = document.createElement('div');
			var img;

			name.innerHTML = ev.name;
			date.innerHTML = "When its happening: " + __const.weekdays[ev.date.getDay()] + ', ' + ev.date + ev.date.getDate();
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

			item.addEventListener('click', function (e) {
				img.classList.toggle('open');
				description.classList.toggle('open');
			});
		}

		ajax('get', '/events', function (xhr) {
			var body = JSON.parse(xhr.response);
			var events = _getCurrentEvents(body.events.items);
			for (var i = 0; i < events.length; i++) {
				// _createEvent(events[i]);
			}
		});
	})();
	return module.exports;
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=