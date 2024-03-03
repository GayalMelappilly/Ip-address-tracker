var apiKey = 'at_BtQbKnyJaXdbldU6j8OWwGM3S7OZS'

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getIp() {
    var ip = $('#ip-input').val()

    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: apiKey, ipAddress: ip },
        success: (data) => {
            console.log(data)
            $('#ip').text(data.ip)
            $('#location').text(data.location.country + ', ' + data.location.region + ', ' + data.location.city)
            $('#timezone').text(data.location.timezone)
            $('#isp').text(data.isp)
            console.log(data.location.lat, data.location.lng)
            var marker = L.marker([data.location.lat, data.location.lng])
            marker.bindPopup(data.location.country + ', ' + data.location.region + ', ' + data.location.city).openPopup();
            marker.addTo(map)
            map.panTo(new L.LatLng(data.location.lat, data.location.lng));
        }
    })
}

