

var map;
function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(37.754, -122.435)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);