$(document).ready(function(){$(".toggle_btn a").click(function( event ) {
    event.preventDefault();
    console.log(this);
    $('.toggle_container').toggleClass("toggle"); 
    });
});



function scroller(){
$(".container").mCustomScrollbar({
        mouseWheel:true,
        scrollButtons:{enable:true},
        alwaysShowScrollbar: true,
        autoHideScrollbar: false,
        advanced:{updateOnContentResize: true
    }
  });
};
$(document).on('ready page:load', scroller)



var style_array = [
    {
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fee379"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fee379"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f3f4f4"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7fc8ed"
            }
        ]
    },
    {},
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#83cead"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            		{"weight": 0.9 },
            		{"visibility": "on"}
        		   ]
    }
]

var map;
function initialize() {

  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(37.754, -122.435),
    styles: style_array,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    panControl: false,
    panControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    }



    }
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
 };

$(document).on('ready page:load', initialize);






