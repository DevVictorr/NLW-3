const map = L.map('mapid').setView([-27.59564,-48.5678219], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);


const icon =L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-poptup',
    minWidth:240,
    minHeight:240
}).setContent('Local ficticio  <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')


L.marker([-27.59564,-48.5678219], {icon})
    .addTo(map)
    .bindPopup(popup)
    