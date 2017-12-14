let mapGet;
let marker;

window.addEventListener('load', function () {
    let mapOptions = {
        center: new google.maps.LatLng(52.379189,4.899431),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    mapGet = new google.maps.Map(document.getElementById("map"), mapOptions);
});

document.getElementById('btn').addEventListener('click', function () {
    let address = document.getElementById('address').value;
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            let result = results[0].geometry.location;
            createMarker(result);
            mapGet.setCenter(result);
            mapGet.setZoom(12);
        }
        else alert('Enter correct address');
    });
});

function createMarker(position) {
  if(marker !== undefined && marker !== ''){
    marker.setMap(null);
    marker = '';
  }
  marker = new google.maps.Marker({
    map: mapGet,
    position: position
  });
}