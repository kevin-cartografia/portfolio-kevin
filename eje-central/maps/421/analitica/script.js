// Inicializar el mapa centrado en las coordenadas
var map = L.map('map').setView([19.050609380479084, -98.07750231701718], 15);

// Capa de mapa base "Positron" de CartoDB
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://carto.com/">CartoDB</a>',
    maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);

// Agregar marcadores con popups
L.marker([19.045788952046006, -98.09953934595791], {draggable: false})
    .addTo(map)
    .bindPopup("Salida para predicar <br> Sábado")
    .openPopup();

L.marker([19.048878337821012, -98.09586646256388], {draggable: false})
    .addTo(map)
    .bindPopup("Salida para predicar <br> Miércoles")
    .openPopup();

L.marker([19.044236413617735, -98.08430449849607], {draggable: false})
    .addTo(map)
    .bindPopup("Salida para predicar <br> Jueves")
    .openPopup();

L.marker([19.05083390739179, -98.07369837713252], {draggable: false})
    .addTo(map)
    .bindPopup("Salida para predicar <br> Martes")
    .openPopup();

L.marker([19.05312818649407, -98.09165671319283], {draggable: false})
    .addTo(map)
    .bindPopup("Salida para predicar <br> Viernes")
    .openPopup();

L.marker([19.04186918628612, -98.09679000372343], {draggable: false})
    .addTo(map)
    .bindPopup("Salida para predicar <br> Domingo")
    .openPopup();
