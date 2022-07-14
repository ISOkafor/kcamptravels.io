function initMap() {
    var options = {
        zoom: 8,
        center: {lat: 6.5244, lng: -3.3792}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position:{lat: 6.5244, lng: -3.3792},
        map: map
    });
}