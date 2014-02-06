$(document).on('ready page:load', function(){
    $(".toggle_btn a").click(function( event ) {
    event.preventDefault();
    $('.toggle_container').toggleClass("toggle"); 
    });
});


$(document).on('ready page:load', function(){
    $(".list_btn a").click(function(event){
    event.preventDefault();
    $(".list_btn img").toggleClass('spin');
    $('#container').toggleClass("shifted");
// animate({marginLeft:"-1000px"});
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
    zoom: 13,
    center: new google.maps.LatLng(37.775, -122.465),
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
 var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

var infowindow = new google.maps.InfoWindow();





var arr = [];
var name_arr=[];
for (var keys in gon.locations){
name_arr.push(keys);
arr.push(gon.locations[keys]);

for (var i = 0; i < arr.length; i++){


// function drop() {
//   for (var i =0; i < markerArray.length; i++) {
//     setTimeout(function() {
//       addMarkerMethod();
//     }, i * 1000);
//   }
// }

 var marker = new google.maps.Marker({
    position: (arr[i]),
    map: map,
    animation: google.maps.Animation.DROP,
    title: name_arr[i]
    })

 // function addMarker() {
 //  markers.push(marker)
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent();
          infowindow.open(map, marker);
        }
      })(marker, i));
  }
}

 };

$(document).on('ready page:load', initialize);




// for (var i = 0; i < gon.values.length; i++){
//  var marker = new google.maps.Marker({
//     position: (gon.values[i]["lat"], gon.values[i]["lng"]),
//     map: map,
//     title:"Hello World!"
// });
// }
// });







