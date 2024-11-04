// Inicializar el mapa
var map = L.map('map').setView([46.2276, 2.2137], 5); // Centrado en Europa con nivel de zoom ajustado

// Añadir capa de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Puntos de interés (coordenadas aproximadas)
var pointsOfInterest = [
    { lat: 51.5074, lng: -0.1278, name: 'Londres, Reino Unido' },
    { lat: 48.8566, lng: 2.3522, name: 'París, Francia' },
    { lat: 41.9028, lng: 12.4964, name: 'Roma, Italia' },
    { lat: 40.4168, lng: -3.7038, name: 'Madrid, España' },
    { lat: 50.1109, lng: 8.6821, name: 'Fráncfort, Alemania' },
    { lat: 48.1351, lng: 11.5820, name: 'Múnich, Alemania' },
    { lat: 45.4642, lng: 9.1900, name: 'Milán, Italia' },
    { lat: 47.4979, lng: 19.0402, name: 'Budapest, Hungría' },
    { lat: 52.5200, lng: 13.4050, name: 'Berlín, Alemania' },
    { lat: 41.3851, lng: 2.1734, name: 'Barcelona, España' },
    { lat: 48.2082, lng: 16.3738, name: 'Viena, Austria' },
    { lat: 43.7102, lng: 7.2620, name: 'Niza, Francia' },
    { lat: 44.4949, lng: 11.3426, name: 'Bolonia, Italia' },
    { lat: 50.0755, lng: 14.4378, name: 'Praga, República Checa' },
    { lat: 45.4408, lng: 12.3155, name: 'Venecia, Italia' }
];

// Añadir marcadores al mapa
pointsOfInterest.forEach(function(point) {
    L.marker([point.lat, point.lng]).addTo(map)
        .bindPopup(point.name);
});
