function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 25.966958492370626, lng: 83.79573315730597 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Nikasi, Ballia' // Title Location
    });
}