
//1°18'47.99"N 103°48'51.16"E
var coordinates = [1184799,103485116];

var map = L.map("map", {
  center: coordinates,
  zoom: 18
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circleMarker01 = l.circle(coordinates. {
  color: "black",
  fillColor: "green",
  fillOpacity: 0.5,
  radius: 100
}).bindPopup(`<center>
             <h3>Hello from the National Orchid Garden In Singapore!</h3>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/_pBR0yCiOX4?si=o8RZjL5H1SlhWLKu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </center>`).addTo(map);
