!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = [{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#747474"}, {"lightness": "23"}]
  }, {
    "featureType": "poi.attraction",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#f38eb0"}]
  }, {
    "featureType": "poi.government",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#ced7db"}]
  }, {
    "featureType": "poi.medical",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#ffa5a8"}]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#c7e5c8"}]
  }, {
    "featureType": "poi.place_of_worship",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#d6cbc7"}]
  }, {
    "featureType": "poi.school",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#c4c9e8"}]
  }, {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#b1eaf1"}]
  }, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{"lightness": "100"}]
  }, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{"visibility": "off"}, {"lightness": "100"}]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#ffd4a5"}]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#ffe9d2"}]
  }, {
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [{"visibility": "simplified"}]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{"weight": "3.00"}]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [{"weight": "0.30"}]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [{"visibility": "on"}]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#747474"}, {"lightness": "36"}]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#e9e5dc"}, {"lightness": "30"}]
  }, {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{"visibility": "on"}, {"lightness": "100"}]
  }, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{"color": "#d2e7f7"}]
  }];
  return module.exports;
});

$__System.registerDynamic("1", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __const = {};
  __const.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var mapStyles = $__require('2');
  function __initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 37.77,
        lng: -122.44
      },
      zoom: 13,
      zoomControl: true,
      scrollwheel: false
    });
  }
  (function() {
    function ajax(method, url, callback, data) {
      var xhr = new XMLHttpRequest();
      method = method.toUpperCase();
      xhr.open(method, url, true);
      if (method === 'POST')
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          callback(xhr);
        }
      };
      if (data)
        xhr.send(data);
      else
        xhr.send();
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
      eventList.sort(function(a, b) {
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
      item.addEventListener('click', function(e) {
        img.classList.toggle('open');
        description.classList.toggle('open');
      });
    }
    ajax('get', '/events', function(xhr) {
      var body = JSON.parse(xhr.response);
      var events = _getCurrentEvents(body.events.items);
      for (var i = 0; i < events.length; i++) {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3B1YmxpYy9qcy9tYXBzdHlsZXMuanMiLCIuLi8uLi9wdWJsaWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUFRLGdCQUFnQixBQUFDLENBQUMsR0FBRSxDQUFHLEdBQUMsQ0FBRyxLQUFHLENBQUcsVUFBUyxVQUFTLENBQUcsQ0FBQSxPQUFNLENBQUcsQ0FBQSxNQUFLOztBQUN4RSxBQUFJLElBQUEsQ0FBQSxNQUFLO0FBQUcsV0FBSyxFQUFJLEtBQUc7QUFBRyxXQUFLLEVBQUksS0FBRyxDQUFDO09BRHZDLFFBQVEsRUFBSSxFQUFDO0FBQ2pCLGdCQUFZLENBQUcsTUFBSTtBQUNuQixnQkFBWSxDQUFHLG1CQUFpQjtBQUNoQyxZQUFRLENBQUcsRUFBQyxDQUNYLE9BQU0sQ0FBRyxVQUFRLENBQ2xCLENBQUcsRUFDRixXQUFVLENBQUcsS0FBRyxDQUNqQixDQUFDO0FBQUEsR0FDQztBQUNGLGdCQUFZLENBQUcsaUJBQWU7QUFDOUIsZ0JBQVksQ0FBRyxnQkFBYztBQUM3QixZQUFRLENBQUcsRUFBQyxDQUNYLE9BQU0sQ0FBRyxVQUFRLENBQ2xCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxpQkFBZTtBQUM5QixnQkFBWSxDQUFHLGdCQUFjO0FBQzdCLFlBQVEsQ0FBRyxFQUFDLENBQ1gsT0FBTSxDQUFHLFVBQVEsQ0FDbEIsQ0FBQztBQUFBLEdBQ0M7QUFDRixnQkFBWSxDQUFHLGNBQVk7QUFDM0IsZ0JBQVksQ0FBRyxnQkFBYztBQUM3QixZQUFRLENBQUcsRUFBQyxDQUNYLE9BQU0sQ0FBRyxVQUFRLENBQ2xCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxXQUFTO0FBQ3hCLGdCQUFZLENBQUcsZ0JBQWM7QUFDN0IsWUFBUSxDQUFHLEVBQUMsQ0FDWCxPQUFNLENBQUcsVUFBUSxDQUNsQixDQUFDO0FBQUEsR0FDQztBQUNGLGdCQUFZLENBQUcsdUJBQXFCO0FBQ3BDLGdCQUFZLENBQUcsZ0JBQWM7QUFDN0IsWUFBUSxDQUFHLEVBQUMsQ0FDWCxPQUFNLENBQUcsVUFBUSxDQUNsQixDQUFDO0FBQUEsR0FDQztBQUNGLGdCQUFZLENBQUcsYUFBVztBQUMxQixnQkFBWSxDQUFHLGdCQUFjO0FBQzdCLFlBQVEsQ0FBRyxFQUFDLENBQ1gsT0FBTSxDQUFHLFVBQVEsQ0FDbEIsQ0FBQztBQUFBLEdBQ0M7QUFDRixnQkFBWSxDQUFHLHFCQUFtQjtBQUNsQyxnQkFBWSxDQUFHLGdCQUFjO0FBQzdCLFlBQVEsQ0FBRyxFQUFDLENBQ1gsT0FBTSxDQUFHLFVBQVEsQ0FDbEIsQ0FBQztBQUFBLEdBQ0M7QUFDRixnQkFBWSxDQUFHLE9BQUs7QUFDcEIsZ0JBQVksQ0FBRyxXQUFTO0FBQ3hCLFlBQVEsQ0FBRyxFQUFDLENBQ1gsV0FBVSxDQUFHLE1BQUksQ0FDbEIsQ0FBQztBQUFBLEdBQ0M7QUFDRixnQkFBWSxDQUFHLE9BQUs7QUFDcEIsZ0JBQVksQ0FBRyxTQUFPO0FBQ3RCLFlBQVEsQ0FBRyxFQUFDLENBQ1gsWUFBVyxDQUFHLE1BQUksQ0FDbkIsQ0FBRyxFQUNGLFdBQVUsQ0FBRyxNQUFJLENBQ2xCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxlQUFhO0FBQzVCLGdCQUFZLENBQUcsZ0JBQWM7QUFDN0IsWUFBUSxDQUFHLEVBQUMsQ0FDWCxPQUFNLENBQUcsVUFBUSxDQUNsQixDQUFDO0FBQUEsR0FDQztBQUNGLGdCQUFZLENBQUcsZ0JBQWM7QUFDN0IsZ0JBQVksQ0FBRyxnQkFBYztBQUM3QixZQUFRLENBQUcsRUFBQyxDQUNYLE9BQU0sQ0FBRyxVQUFRLENBQ2xCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxhQUFXO0FBQzFCLGdCQUFZLENBQUcsTUFBSTtBQUNuQixZQUFRLENBQUcsRUFBQyxDQUNYLFlBQVcsQ0FBRyxhQUFXLENBQzFCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxhQUFXO0FBQzFCLGdCQUFZLENBQUcsZ0JBQWM7QUFDN0IsWUFBUSxDQUFHLEVBQUMsQ0FDWCxRQUFPLENBQUcsT0FBSyxDQUNoQixDQUFDO0FBQUEsR0FDQztBQUNGLGdCQUFZLENBQUcsYUFBVztBQUMxQixnQkFBWSxDQUFHLGtCQUFnQjtBQUMvQixZQUFRLENBQUcsRUFBQyxDQUNYLFFBQU8sQ0FBRyxPQUFLLENBQ2hCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxhQUFXO0FBQzFCLGdCQUFZLENBQUcsY0FBWTtBQUMzQixZQUFRLENBQUcsRUFBQyxDQUNYLFlBQVcsQ0FBRyxLQUFHLENBQ2xCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxhQUFXO0FBQzFCLGdCQUFZLENBQUcsbUJBQWlCO0FBQ2hDLFlBQVEsQ0FBRyxFQUFDLENBQ1gsT0FBTSxDQUFHLFVBQVEsQ0FDbEIsQ0FBRyxFQUNGLFdBQVUsQ0FBRyxLQUFHLENBQ2pCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxhQUFXO0FBQzFCLGdCQUFZLENBQUcscUJBQW1CO0FBQ2xDLFlBQVEsQ0FBRyxFQUFDLENBQ1gsT0FBTSxDQUFHLFVBQVEsQ0FDbEIsQ0FBRyxFQUNGLFdBQVUsQ0FBRyxLQUFHLENBQ2pCLENBQUM7QUFBQSxHQUNDO0FBQ0YsZ0JBQVksQ0FBRyxlQUFhO0FBQzVCLGdCQUFZLENBQUcsV0FBUztBQUN4QixZQUFRLENBQUcsRUFBQyxDQUNYLFlBQVcsQ0FBRyxLQUFHLENBQ2xCLENBQUcsRUFDRixXQUFVLENBQUcsTUFBSSxDQUNsQixDQUFDO0FBQUEsR0FDQztBQUNGLGdCQUFZLENBQUcsUUFBTTtBQUNyQixnQkFBWSxDQUFHLE1BQUk7QUFDbkIsWUFBUSxDQUFHLEVBQUMsQ0FDWCxPQUFNLENBQUcsVUFBUSxDQUNsQixDQUFDO0FBQUEsR0FDRCxDQUFDO09BbElLLENBQUEsTUFBSyxRQUFRLENBQUM7QUFBNEUsQ0FBQyxDQUFDOztRQ0EzRixnQkFBZ0IsQUFBQyxDQUFDLEdBQUUsQ0FBRyxFQUFDLEdBQUUsQ0FBQyxDQUFHLEtBQUcsQ0FBRyxVQUFTLFVBQVMsQ0FBRyxDQUFBLE9BQU0sQ0FBRyxDQUFBLE1BQUs7O0FBQzNFLEFBQUksSUFBQSxDQUFBLE1BQUs7QUFBRyxXQUFLLEVBQUksS0FBRztBQUFHLFdBQUssRUFBSSxLQUFHLENBQUM7QUFEeEMsSUFBQSxDQUFBLE9BQU0sRUFBSSxHQUFDLENBQUM7QUFDZixRQUFNLFNBQVMsRUFBSSxFQUFDLFFBQU8sQ0FBRyxTQUFPLENBQUcsVUFBUSxDQUFHLFlBQVUsQ0FBRyxXQUFTLENBQUcsU0FBTyxDQUFHLFdBQVMsQ0FBQyxDQUFDO0FBQzlGLElBQUEsQ0FBQSxTQUFRLGFBRkgsQUFBQyxDQUFDLEdBQUUsQ0FBQyxBQUVxQixDQUFDO1NBRzNCLFVBQVEsQ0FBQyxBQUFDLENBQUU7QUFDcEIsQUFBSSxNQUFBLENBQUEsR0FBRSxFQUFJLElBQUksQ0FBQSxNQUFLLEtBQUssSUFBSSxBQUFDLENBQUMsUUFBTyxlQUFlLEFBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBRztBQUM3RCxXQUFLLENBQUc7QUFBQyxVQUFFLENBQUcsTUFBSTtBQUFHLFVBQUUsQ0FBRyxFQUFDLE1BQUs7QUFBQSxNQUFDO0FBQ2pDLFNBQUcsQ0FBRyxHQUFDO0FBQ1AsZ0JBQVUsQ0FBRyxLQUFHO0FBQ2hCLGdCQUFVLENBQUcsTUFBSTtBQUFBLElBRWxCLENBQUMsQ0FBQzs7RUFHRixTQUFRLEFBQUMsQ0FBQztBQUNWLFdBQVMsS0FBRyxDQUFFLE1BQUssQ0FBRyxDQUFBLEdBQUUsQ0FBRyxDQUFBLFFBQU8sQ0FBRyxDQUFBLElBQUcsQ0FBRztBQUMxQyxBQUFJLFFBQUEsQ0FBQSxHQUFFLEVBQUksSUFBSSxlQUFhLEFBQUMsRUFBQyxDQUFDO0FBQzlCLFdBQUssRUFBSSxDQUFBLE1BQUssWUFBWSxBQUFDLEVBQUMsQ0FBQztBQUM3QixRQUFFLEtBQUssQUFBQyxDQUFDLE1BQUssQ0FBRyxJQUFFLENBQUcsS0FBRyxDQUFDLENBQUM7QUFFM0IsU0FBRyxNQUFLLElBQU0sT0FBSztBQUNsQixVQUFFLGlCQUFpQixBQUFDLENBQUMsY0FBYSxDQUFHLG9DQUFrQyxDQUFDLENBQUM7QUFBQSxBQUUxRSxRQUFFLG1CQUFtQixFQUFJLFVBQVEsQUFBQyxDQUFFO0FBQ2pDLFdBQUksR0FBRSxXQUFXLElBQU0sRUFBQSxDQUFBLEVBQUssQ0FBQSxHQUFFLE9BQU8sSUFBTSxJQUFFLENBQUc7QUFDakQsaUJBQU8sQUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDO1FBQ2Q7QUFBQSxNQUNELENBQUE7QUFDQSxTQUFJLElBQUc7QUFDTixVQUFFLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDOztBQUVkLFVBQUUsS0FBSyxBQUFDLEVBQUMsQ0FBQztBQUFBLElBQ1o7QUFBQSxBQUVBLFdBQVMsa0JBQWdCLENBQUUsTUFBSyxDQUFFO0FBQ2pDLEFBQUksUUFBQSxDQUFBLFNBQVEsRUFBSSxHQUFDLENBQUM7QUFDbEIsVUFBUyxHQUFBLENBQUEsQ0FBQSxFQUFJLEVBQUEsQ0FBRyxDQUFBLENBQUEsRUFBSSxDQUFBLE1BQUssT0FBTyxDQUFHLENBQUEsQ0FBQSxFQUFFLENBQUU7QUFDdEMsQUFBSSxVQUFBLENBQUEsRUFBQyxFQUFJLENBQUEsTUFBSyxDQUFFLENBQUEsQ0FBQyxDQUFDO0FBQ2xCLEFBQUksVUFBQSxDQUFBLE9BQU0sRUFBSSxHQUFDLENBQUM7QUFDaEIsQUFBSSxVQUFBLENBQUEsSUFBRyxFQUFJLENBQUEsRUFBQyxNQUFNLEtBQUssRUFBRyxDQUFBLEVBQUMsTUFBTSxLQUFLLEVBQUcsQ0FBQSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzFELFdBQUcsRUFBSSxJQUFJLEtBQUcsQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQ3JCLFdBQUksSUFBRyxHQUFLLElBQUksS0FBRyxBQUFDLEVBQUMsQ0FBRTtBQUN0QixnQkFBTSxLQUFLLEVBQUksSUFBSSxLQUFHLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUM3QixnQkFBTSxTQUFTLEVBQUksQ0FBQSxFQUFDLFNBQVMsQ0FBQztBQUM5QixnQkFBTSxLQUFLLEVBQUksQ0FBQSxFQUFDLFFBQVEsQ0FBQztBQUN6QixnQkFBTSxPQUFPLEVBQUksQ0FBQSxFQUFDLE9BQU8sQ0FBQztBQUMxQixnQkFBTSxZQUFZLEVBQUksQ0FBQSxFQUFDLFlBQVksQ0FBQztBQUNwQyxrQkFBUSxLQUFLLEFBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQztRQUN4QjtBQUFBLE1BQ0Q7QUFBQSxBQUNBLGNBQVEsS0FBSyxBQUFDLENBQUMsU0FBUyxDQUFBLENBQUUsQ0FBQSxDQUFBLENBQUU7QUFDM0IsV0FBSSxDQUFBLEtBQUssRUFBSSxDQUFBLENBQUEsS0FBSyxDQUFFO0FBQ25CLGVBQU8sRUFBQSxDQUFDO1FBQ1Q7QUFBQSxBQUNBLFdBQUksQ0FBQSxLQUFLLEVBQUksQ0FBQSxDQUFBLEtBQUssQ0FBRTtBQUNuQixlQUFPLEVBQUMsQ0FBQSxDQUFDO1FBQ1Y7QUFBQSxBQUNBLGFBQU8sRUFBQSxDQUFDO01BQ1QsQ0FBQyxDQUFDO0FBQ0YsV0FBTyxVQUFRLENBQUM7SUFDakI7QUFBQSxBQUVBLFdBQVMsWUFBVSxDQUFFLFdBQVUsQ0FBRTtBQUNoQyxBQUFJLFFBQUEsQ0FBQSxLQUFJLEVBQUksQ0FBQSxXQUFVLGNBQWMsQUFBQyxDQUFDLGdDQUErQixDQUFDLENBQUM7QUFDdkUsQUFBSSxRQUFBLENBQUEsR0FBRSxFQUFJLENBQUEsV0FBVSxpQkFBaUIsQUFBQyxDQUFDLEtBQUksQ0FBQyxDQUFDO0FBQzdDLFVBQUksT0FBTyxBQUFDLEVBQUMsQ0FBQztBQUNkLFNBQUksR0FBRSxPQUFPLENBQUU7QUFDZCxZQUFRLEdBQUEsQ0FBQSxDQUFBLEVBQUksRUFBQSxDQUFFLENBQUEsQ0FBQSxFQUFJLENBQUEsR0FBRSxPQUFPLENBQUcsQ0FBQSxDQUFBLEVBQUUsQ0FBRTtBQUNqQyxZQUFFLENBQUUsQ0FBQSxDQUFDLE9BQU8sQUFBQyxFQUFDLENBQUM7UUFDaEI7QUFBQSxBQUNBLGFBQU8sSUFBRSxDQUFDO01BQ1g7QUFBQSxJQUNEO0FBQUEsQUFFQSxXQUFTLGFBQVcsQ0FBRSxFQUFDLENBQUU7QUFDeEIsQUFBSSxRQUFBLENBQUEsU0FBUSxFQUFJLENBQUEsUUFBTyxLQUFLLGNBQWMsQUFBQyxDQUFDLFlBQVcsQ0FBQyxDQUFDO0FBQ3pELEFBQUksUUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLFFBQU8sY0FBYyxBQUFDLENBQUMsS0FBSSxDQUFDLENBQUM7QUFDeEMsQUFBSSxRQUFBLENBQUEsSUFBRyxFQUFJLENBQUEsUUFBTyxjQUFjLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUN2QyxBQUFJLFFBQUEsQ0FBQSxJQUFHLEVBQUksQ0FBQSxRQUFPLGNBQWMsQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQ3pDLEFBQUksUUFBQSxDQUFBLFdBQVUsRUFBSSxDQUFBLFFBQU8sY0FBYyxBQUFDLENBQUMsS0FBSSxDQUFDLENBQUM7QUFDL0MsQUFBSSxRQUFBLENBQUEsR0FBRSxDQUFDO0FBRVAsU0FBRyxVQUFVLEVBQUksQ0FBQSxFQUFDLEtBQUssQ0FBQztBQUN4QixTQUFHLFVBQVUsRUFBSSxDQUFBLHNCQUFxQixFQUFJLENBQUEsT0FBTSxTQUFTLENBQUUsRUFBQyxLQUFLLE9BQU8sQUFBQyxFQUFDLENBQUMsQ0FBQSxDQUFJLEtBQUcsQ0FBQSxDQUFJLENBQUEsRUFBQyxLQUFLLENBQUEsQ0FBSSxDQUFBLEVBQUMsS0FBSyxRQUFRLEFBQUMsRUFBQyxDQUFFO0FBQ2xILGdCQUFVLFVBQVUsRUFBSSxDQUFBLEVBQUMsWUFBWSxDQUFDO0FBQ3RDLFFBQUUsRUFBSSxDQUFBLFdBQVUsQUFBQyxDQUFDLFdBQVUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxHQUFLLENBQUEsUUFBTyxjQUFjLEFBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQztBQUVsRSxTQUFHLFVBQVUsSUFBSSxBQUFDLENBQUMsV0FBVSxDQUFDLENBQUM7QUFDL0IsU0FBRyxVQUFVLElBQUksQUFBQyxDQUFDLFdBQVUsQ0FBQyxDQUFDO0FBQy9CLFNBQUcsVUFBVSxJQUFJLEFBQUMsQ0FBQyxXQUFVLENBQUMsQ0FBQztBQUMvQixRQUFFLFVBQVUsSUFBSSxBQUFDLENBQUMsWUFBVyxDQUFDLENBQUM7QUFDL0IsZ0JBQVUsVUFBVSxJQUFJLEFBQUMsQ0FBQyxrQkFBaUIsQ0FBQyxDQUFDO0FBRTdDLFNBQUcsWUFBWSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFDdEIsU0FBRyxZQUFZLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUN0QixTQUFHLFlBQVksQUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQ3JCLFNBQUcsWUFBWSxBQUFDLENBQUMsV0FBVSxDQUFDLENBQUM7QUFDN0IsY0FBUSxZQUFZLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUUzQixTQUFHLGlCQUFpQixBQUFDLENBQUMsT0FBTSxDQUFHLFVBQVMsQ0FBQSxDQUFFO0FBQ3pDLFVBQUUsVUFBVSxPQUFPLEFBQUMsQ0FBQyxNQUFLLENBQUMsQ0FBQztBQUM1QixrQkFBVSxVQUFVLE9BQU8sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO01BQ3JDLENBQUMsQ0FBQztJQUNIO0FBQUEsQUFFQSxPQUFHLEFBQUMsQ0FBQyxLQUFJLENBQUcsVUFBUSxDQUFHLFVBQVMsR0FBRSxDQUFFO0FBQ25DLEFBQUksUUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLElBQUcsTUFBTSxBQUFDLENBQUMsR0FBRSxTQUFTLENBQUMsQ0FBQztBQUNuQyxBQUFJLFFBQUEsQ0FBQSxNQUFLLEVBQUksQ0FBQSxpQkFBZ0IsQUFBQyxDQUFDLElBQUcsT0FBTyxNQUFNLENBQUMsQ0FBQztBQUNqRCxVQUFTLEdBQUEsQ0FBQSxDQUFBLEVBQUksRUFBQSxDQUFHLENBQUEsQ0FBQSxFQUFJLENBQUEsTUFBSyxPQUFPLENBQUcsQ0FBQSxDQUFBLEVBQUUsQ0FBRSxHQUV2QztBQUFBLElBQ0QsQ0FBQyxDQUFDO0dBRUYsQUFBQyxFQUFDLENBQUM7T0FsSEcsQ0FBQSxNQUFLLFFBQVEsQ0FBQztBQUErRSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFt7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcblx0XCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcblx0XCJzdHlsZXJzXCI6IFt7XG5cdFx0XCJjb2xvclwiOiBcIiM3NDc0NzRcIlxuXHR9LCB7XG5cdFx0XCJsaWdodG5lc3NcIjogXCIyM1wiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuYXR0cmFjdGlvblwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2YzOGViMFwiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuZ292ZXJubWVudFwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2NlZDdkYlwiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJwb2kubWVkaWNhbFwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2ZmYTVhOFwiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2M3ZTVjOFwiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGxhY2Vfb2Zfd29yc2hpcFwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2Q2Y2JjN1wiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuc2Nob29sXCIsXG5cdFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG5cdFwic3R5bGVyc1wiOiBbe1xuXHRcdFwiY29sb3JcIjogXCIjYzRjOWU4XCJcblx0fV1cbn0sIHtcblx0XCJmZWF0dXJlVHlwZVwiOiBcInBvaS5zcG9ydHNfY29tcGxleFwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2IxZWFmMVwiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG5cdFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImxpZ2h0bmVzc1wiOiBcIjEwMFwiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG5cdFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcblx0XCJzdHlsZXJzXCI6IFt7XG5cdFx0XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcblx0fSwge1xuXHRcdFwibGlnaHRuZXNzXCI6IFwiMTAwXCJcblx0fV1cbn0sIHtcblx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2ZmZDRhNVwiXG5cdH1dXG59LCB7XG5cdFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG5cdFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG5cdFwic3R5bGVyc1wiOiBbe1xuXHRcdFwiY29sb3JcIjogXCIjZmZlOWQyXCJcblx0fV1cbn0sIHtcblx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcblx0XCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcblx0fV1cbn0sIHtcblx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcblx0XCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcblx0XCJzdHlsZXJzXCI6IFt7XG5cdFx0XCJ3ZWlnaHRcIjogXCIzLjAwXCJcblx0fV1cbn0sIHtcblx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcblx0XCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcIndlaWdodFwiOiBcIjAuMzBcIlxuXHR9XVxufSwge1xuXHRcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcblx0XCJzdHlsZXJzXCI6IFt7XG5cdFx0XCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuXHR9XVxufSwge1xuXHRcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiIzc0NzQ3NFwiXG5cdH0sIHtcblx0XHRcImxpZ2h0bmVzc1wiOiBcIjM2XCJcblx0fV1cbn0sIHtcblx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcblx0XCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2U5ZTVkY1wiXG5cdH0sIHtcblx0XHRcImxpZ2h0bmVzc1wiOiBcIjMwXCJcblx0fV1cbn0sIHtcblx0XCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQubGluZVwiLFxuXHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XCJzdHlsZXJzXCI6IFt7XG5cdFx0XCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuXHR9LCB7XG5cdFx0XCJsaWdodG5lc3NcIjogXCIxMDBcIlxuXHR9XVxufSwge1xuXHRcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcblx0XCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcInN0eWxlcnNcIjogW3tcblx0XHRcImNvbG9yXCI6IFwiI2QyZTdmN1wiXG5cdH1dXG59XTtcbiIsInZhciBfX2NvbnN0ID0ge307XG5cdF9fY29uc3Qud2Vla2RheXMgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcbnZhciBtYXBTdHlsZXMgPSByZXF1aXJlKCdtYXBzdHlsZXMnKTtcbi8vdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gX19pbml0TWFwKCkge1xuXHR2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcblx0XHRjZW50ZXI6IHtsYXQ6IDM3Ljc3LCBsbmc6IC0xMjIuNDR9LFxuXHRcdHpvb206IDEzLFxuXHRcdHpvb21Db250cm9sOiB0cnVlLFxuXHRcdHNjcm9sbHdoZWVsOiBmYWxzZVxuXHRcdC8vIHN0eWxlczogbWFwU3R5bGVzXG5cdH0pO1xufVxuXG4oZnVuY3Rpb24oKXtcblx0ZnVuY3Rpb24gYWpheChtZXRob2QsIHVybCwgY2FsbGJhY2ssIGRhdGEpIHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0bWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG5cdFx0eGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG5cdFx0aWYobWV0aG9kID09PSAnUE9TVCcpXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcblxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0ICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0Y2FsbGJhY2soeGhyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGRhdGEpXG5cdFx0XHR4aHIuc2VuZChkYXRhKTtcblx0XHRlbHNlXG5cdFx0XHR4aHIuc2VuZCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2dldEN1cnJlbnRFdmVudHMoZXZlbnRzKXtcblx0XHR2YXIgZXZlbnRMaXN0ID0gW107XG5cdFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIGV2ID0gZXZlbnRzW2ldO1xuXHRcdFx0dmFyIG9wZW5pbmcgPSB7fTtcblx0XHRcdHZhciBkYXRlID0gZXYuc3RhcnQuZGF0ZT8gZXYuc3RhcnQuZGF0ZTogZXYuc3RhcnQuZGF0ZVRpbWU7XG5cdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG5cdFx0XHRpZiAoZGF0ZSA+PSBuZXcgRGF0ZSgpKXtcblx0XHRcdFx0b3BlbmluZy5kYXRlID0gbmV3IERhdGUoZGF0ZSk7XG5cdFx0XHRcdG9wZW5pbmcubG9jYXRpb24gPSBldi5sb2NhdGlvbjtcblx0XHRcdFx0b3BlbmluZy5uYW1lID0gZXYuc3VtbWFyeTtcblx0XHRcdFx0b3BlbmluZy5zdGF0dXMgPSBldi5zdGF0dXM7XG5cdFx0XHRcdG9wZW5pbmcuZGVzY3JpcHRpb24gPSBldi5kZXNjcmlwdGlvbjtcblx0XHRcdFx0ZXZlbnRMaXN0LnB1c2gob3BlbmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50TGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG5cdFx0XHRpZiAoYS5kYXRlID4gYi5kYXRlKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYS5kYXRlIDwgYi5kYXRlKXtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGV2ZW50TGlzdDtcblx0fVxuXG5cdGZ1bmN0aW9uIF9zdHJpcEltYWdlKGRlc2NyaXB0aW9uKXtcblx0XHR2YXIgc2hhcmUgPSBkZXNjcmlwdGlvbi5xdWVyeVNlbGVjdG9yKCcuYWRkdG9hbnlfc2hhcmVfc2F2ZV9jb250YWluZXInKTtcblx0XHR2YXIgaW1nID0gZGVzY3JpcHRpb24ucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG5cdFx0c2hhcmUucmVtb3ZlKCk7XG5cdFx0aWYgKGltZy5sZW5ndGgpe1xuXHRcdFx0Zm9yKHZhciBpID0gMDtpIDwgaW1nLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0aW1nW2ldLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGltZztcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBfY3JlYXRlRXZlbnQoZXYpe1xuXHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudExpc3QnKTtcblx0XHR2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0XHR2YXIgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHR2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR2YXIgaW1nO1xuXG5cdFx0bmFtZS5pbm5lckhUTUwgPSBldi5uYW1lO1xuXHRcdGRhdGUuaW5uZXJIVE1MID0gXCJXaGVuIGl0cyBoYXBwZW5pbmc6IFwiICsgX19jb25zdC53ZWVrZGF5c1tldi5kYXRlLmdldERheSgpXSArICcsICcgKyBldi5kYXRlICsgZXYuZGF0ZS5nZXREYXRlKCkgO1xuXHRcdGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGV2LmRlc2NyaXB0aW9uO1xuXHRcdGltZyA9IF9zdHJpcEltYWdlKGRlc2NyaXB0aW9uKVswXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuXHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnZXZlbnRJdGVtJyk7XG5cdFx0bmFtZS5jbGFzc0xpc3QuYWRkKCdldmVudE5hbWUnKTtcblx0XHRkYXRlLmNsYXNzTGlzdC5hZGQoJ2V2ZW50RGF0ZScpO1xuXHRcdGltZy5jbGFzc0xpc3QuYWRkKCdldmVudEltYWdlJyk7XG5cdFx0ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZXZlbnREZXNjcmlwdGlvbicpO1xuXG5cdFx0aXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcblx0XHRpdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuXHRcdGl0ZW0uYXBwZW5kQ2hpbGQoaW1nKTtcblx0XHRpdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0XHRpbWcuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuXHRcdFx0ZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuXHRcdH0pO1xuXHR9XG5cblx0YWpheCgnZ2V0JywgJy9ldmVudHMnLCBmdW5jdGlvbih4aHIpe1xuXHRcdHZhciBib2R5ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuXHRcdHZhciBldmVudHMgPSBfZ2V0Q3VycmVudEV2ZW50cyhib2R5LmV2ZW50cy5pdGVtcyk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0Ly8gX2NyZWF0ZUV2ZW50KGV2ZW50c1tpXSk7XG5cdFx0fVxuXHR9KTtcblxufSkoKTtcbiJdfQ==